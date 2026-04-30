import { NextResponse } from "next/server";
import crypto from "crypto";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const SERVER_PREFIX = "us10";
const TAG = "psych safety sim";

function subscriberHash(email) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const baseUrl = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}`;
    const hash = subscriberHash(email);
    const authHeader =
      "Basic " + Buffer.from(`anystring:${API_KEY}`).toString("base64");

    // Add or update member
    const memberRes = await fetch(`${baseUrl}/members/${hash}`, {
      method: "PUT",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
      }),
    });

    if (!memberRes.ok) {
      const err = await memberRes.json();
      console.error("Mailchimp member error:", err);
      return NextResponse.json(
        { success: false, error: err.detail || "Mailchimp error" },
        { status: 502 }
      );
    }

    // Assign tag
    const tagRes = await fetch(`${baseUrl}/members/${hash}/tags`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tags: [{ name: TAG, status: "active" }],
      }),
    });

    if (!tagRes.ok) {
      const err = await tagRes.json();
      console.error("Mailchimp tag error:", err);
      // Member was added — don't fail the whole request over a tag
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
