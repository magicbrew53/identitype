// ============================================================
// Psychological Safety Simulation — Scenario Library
// ============================================================
// 22 scenarios across all 5 SCARF threat domains
// Each scenario is individual-contributor friendly
// Built on Pat's SCARF → Negative Behavior mapping
// ============================================================

export const SCARF_DOMAINS = {
  STATUS: {
    name: "Personal Value",
    color: "#EB865C",
    definition: "My sense of importance or value relative to others",
    threat: "Fear of failure, embarrassment, being singled out, competency questioned",
    remedy: "Mutual respect, public acknowledgment, clear career pathways",
  },
  CERTAINTY: {
    name: "Confidence",
    color: "#6CADC3",
    definition: "My ability to predict future events with few big surprises",
    threat: "Constantly changing plans, unclear goals, withholding information",
    remedy: "Clear strategies, steady expectations, defined timelines",
  },
  AUTONOMY: {
    name: "Autonomy",
    color: "#AAC785",
    definition: "My ability to have control or influence over my environment",
    threat: "Only one right way, questions unwelcome, process over outcome",
    remedy: "Collaborative decision-making, openness to new ideas, supporting unique strengths",
  },
  RELATEDNESS: {
    name: "Sense of Belonging",
    color: "#AB84BB",
    definition: "My sense of connection and safety with others",
    threat: "Transactional environment, disconnected leadership, lack of empathy",
    remedy: "Building connections, reciprocity, vulnerability, empowerment",
  },
  FAIRNESS: {
    name: "Fairness",
    color: "#000000",
    definition: "My perception of just and equitable treatment",
    threat: "Arbitrary standards, broken promises, fickle rule changes",
    remedy: "Transparency, consistent clear standards, reciprocity, care",
  },
};

export const SCENARIOS = [
  // ─────────── STATUS ───────────
  {
    id: 1,
    domain: "STATUS",
    setting: "9:15 AM · TEAM STANDUP",
    negBehavior: "Microaggressions · Competency questioned",
    narrative: "You're walking the team through a risk you identified in the Q3 data — something nobody else caught. Mid-sentence, your skip-level manager joins the call and says, \"Sorry — can someone give me the quick version?\"\n\nYour teammate Alex jumps in and summarizes your point. Except it's not quite right. And now everyone's responding to Alex's version, not yours.\n\nYour manager doesn't redirect. Nobody looks at you. The meeting moves on.",
    choices: [
      {
        label: "Correct the record",
        type: "Fight",
        consequence: "You say, \"Just to clarify — the actual risk is different from what Alex described.\" You re-explain. The skip-level nods. But you catch a micro-expression on your manager's face — something like surprise that you pushed back.\n\nYou were right. You also just spent social capital to be heard accurately.",
        monologue: "My competence just got questioned — not explicitly, but structurally. Someone restated my work and nobody noticed the difference. When I corrected it, I became the person who \"can't let things go.\" That's a status tax. I'm paying it with reputation, and nobody's keeping the books.",
        costs: { status: 12, certainty: 4, autonomy: 6, relatedness: 8, fairness: 10 },
      },
      {
        label: "Let Alex's version stand",
        type: "Flight",
        consequence: "You let it go. The meeting ends with an action item assigned to Alex based on the version of your insight that isn't quite right. You'll fix it quietly later — the actual work will still be yours, just without the visibility.",
        monologue: "I just did the math: is being right worth the cost of being seen as difficult? I chose no. That calculation — invisible, instant, exhausting — is labor that doesn't show up in any performance review. But it's draining me like a second job.",
        costs: { status: 18, certainty: 6, autonomy: 10, relatedness: 6, fairness: 14 },
      },
      {
        label: "Go quiet for the rest of the meeting",
        type: "Freeze",
        consequence: "You stop contributing. When your manager asks if there's anything else, you say \"All good.\" You had two more risk items to raise. They'll surface as problems in three weeks instead of warnings today.",
        monologue: "My brain just switched from creative problem-solving to self-protection. That's the amygdala taking over — fight, flight, freeze. I froze. The company lost two early warnings. My prefrontal cortex, the part that does my best thinking, just went offline. And nobody will ever connect the dots.",
        costs: { status: 16, certainty: 8, autonomy: 14, relatedness: 10, fairness: 8 },
      },
    ],
  },
  {
    id: 2,
    domain: "STATUS",
    setting: "2:30 PM · QUARTERLY REVIEW PRESENTATION",
    negBehavior: "Microaggressions · Judgment",
    narrative: "You just finished walking the leadership team through your Q3 results. The numbers are strong. The room is quiet for a beat, and then a senior VP says, \"Wow — that was really articulate.\"\n\nThe emphasis lands wrong. It sounds like surprise. Your peer, who presented right before you with weaker numbers, didn't get that comment.\n\nThe meeting moves on. You're still parsing that sentence.",
    choices: [
      {
        label: "Address it lightly, on the spot",
        type: "Fight",
        consequence: "You smile and say, \"Thanks — I try to be clear when the data's this strong.\" It's gracious, but pointed. The VP hesitates, then says, \"Of course, of course.\" The room registers the exchange. You named something most people never name.",
        monologue: "I named it without naming it, and in doing so I became the inconvenience. The comment disappears when I don't mention it; when I do, I'm the one who made it exist. That's the trap — silence protects them, speaking up exposes me. There is no clean way out.",
        costs: { status: 14, certainty: 4, autonomy: 8, relatedness: 10, fairness: 12 },
      },
      {
        label: "Say thank you and move on",
        type: "Flight",
        consequence: "You say \"thanks\" and transition to the next slide. For the rest of the meeting, you're replaying the comment in your head while trying to answer questions. You'll carry that three-word sentence around for the rest of the week.",
        monologue: "I just added another entry to the mental file I keep — the one full of moments that are individually deniable but collectively a pattern. The file is how I know I'm not imagining things. The file is also why I'm exhausted.",
        costs: { status: 18, certainty: 6, autonomy: 6, relatedness: 12, fairness: 14 },
      },
      {
        label: "Shorten the rest of your presentation",
        type: "Freeze",
        consequence: "You skip two slides you had prepared. You wrap up early. A week of preparation, compressed because something in the room made you want to stop being visible. Nobody notices what they didn't see.",
        monologue: "That compliment triggered my threat response — not the words themselves but the pattern behind them. My prefrontal cortex is offline and my only instinct is to shrink. An hour of my expertise, cut short, because the cost of being seen spiked in one sentence. They'll never know why I trailed off.",
        costs: { status: 22, certainty: 8, autonomy: 12, relatedness: 8, fairness: 10 },
      },
    ],
  },
  {
    id: 3,
    domain: "STATUS",
    setting: "11:00 AM · PERFORMANCE REVIEW",
    negBehavior: "Poorly managed performance reviews · Cutting feedback · Competency questioned",
    narrative: "Your annual review is positive on deliverables. Then your manager adds: \"People sometimes find you intense. Work on being more approachable.\"\n\nNo examples. No specifics. No mention in any 1:1 this year. You ask who said it. \"I don't want to name names, but it's come up a few times.\" You ask what \"intense\" means in practice. \"You know — just be aware of how you come across.\"\n\nThe word sits in your file. Permanent. Unfalsifiable.",
    choices: [
      {
        label: "Push for specifics",
        type: "Fight",
        consequence: "You ask for one concrete example you can learn from. Your manager looks uncomfortable. She says she'll \"get back to you\" with examples. She won't. But the word \"intense\" is now in your written review, and no specifics means no defense.",
        monologue: "I asked for the most basic thing — evidence — and the request itself made her uncomfortable. That tells me everything. This feedback isn't based on behavior; it's based on a feeling someone had about me. I can't correct a feeling. I can only carry it.",
        costs: { status: 16, certainty: 14, autonomy: 10, relatedness: 6, fairness: 18 },
      },
      {
        label: "Accept it and ask how to improve",
        type: "Flight",
        consequence: "You say, \"I'll work on it.\" You leave the meeting and spend the next three weeks second-guessing every email, every Slack message, every contribution in a meeting. The word \"intense\" is now a governor on your entire professional expression.",
        monologue: "I just agreed to shrink myself based on evidence I'm not allowed to see. Every interaction now runs through a filter: was that too much? Too direct? Too confident? That filter is the opposite of doing my best work. It's me performing smallness so I don't get that word on my review again.",
        costs: { status: 20, certainty: 10, autonomy: 18, relatedness: 12, fairness: 14 },
      },
      {
        label: "Go silent for the rest of the review",
        type: "Freeze",
        consequence: "You stop responding beyond \"okay\" and \"got it.\" Your manager takes your silence as acceptance and wraps up the meeting feeling like it went well. You walk out and sit in your car for twenty minutes before driving home.",
        monologue: "My brain just hit a wall. There's no path forward from feedback without specifics. I can't fight it, I can't fix it, I can't file a grievance about vibes. The only thing I can do is stop trusting that my effort will be fairly evaluated. That trust just broke, and it won't come back from one conversation.",
        costs: { status: 24, certainty: 16, autonomy: 14, relatedness: 10, fairness: 22 },
      },
    ],
  },
  {
    id: 16,
    domain: "STATUS",
    setting: "1:00 PM · CLIENT CALL",
    negBehavior: "Competency questioned · Microaggressions",
    narrative: "You're the subject matter expert on this account. The client has a technical question. She looks at your colleague Dan and asks him. Dan turns to you and asks for the answer. You give it. Dan repeats it back to the client, slightly less accurately.\n\nThe client thanks Dan.\n\nThis happens four more times before the call ends. By the end, you've done all the thinking and none of the talking. Dan is brilliant on this call. You're invisible.",
    choices: [
      {
        label: "Jump in directly when she asks the next question",
        type: "Fight",
        consequence: "You say, \"I can take this one.\" You answer. The client nods, then on the next question, looks at Dan again. You've been polite. She hasn't noticed. Dan has noticed — and after the call he'll mention that you \"seemed frustrated.\"",
        monologue: "I inserted myself into a conversation I should already have been in. And the result wasn't recognition — it was being labeled frustrated. That's the double bind: when I don't advocate, I'm invisible. When I do, I'm difficult. Dan will walk away from this call thinking it went great. I'll walk away wondering how many calls have gone exactly like this.",
        costs: { status: 14, certainty: 6, autonomy: 10, relatedness: 10, fairness: 12 },
      },
      {
        label: "Keep feeding answers to Dan",
        type: "Flight",
        consequence: "You let Dan be the face. It's efficient. It keeps the client happy. When the call ends, Dan gets an effusive thank-you email. You get CC'd. Your name appears once, at the bottom, without a comma.",
        monologue: "I just ran a whole client meeting from the wings and let someone else take the bow. That's not humility — that's me calculating that the cost of being seen is higher than the cost of being forgotten. Both costs are real. I'm just picking the one that's quieter.",
        costs: { status: 20, certainty: 8, autonomy: 14, relatedness: 8, fairness: 16 },
      },
      {
        label: "Mute yourself and take notes",
        type: "Freeze",
        consequence: "You stop engaging. Dan fumbles two answers you could have nailed. The client leaves with a slightly worse impression of your team. You'll see the impact in the next account review. You also won't correct it.",
        monologue: "I just watched work I care about get done worse than it should have, and I let it happen. That's not who I want to be. But I've learned that showing up fully in rooms where I'm already invisible costs more than it's worth. The company is paying for that calculation. They just don't know it.",
        costs: { status: 22, certainty: 10, autonomy: 18, relatedness: 14, fairness: 12 },
      },
    ],
  },
  {
    id: 17,
    domain: "STATUS",
    setting: "3:30 PM · CROSS-FUNCTIONAL WORKING GROUP",
    negBehavior: "Being singled out · Microaggressions · Judgment",
    narrative: "Three months into this project, a stakeholder from another department refers to you as \"the new person\" in front of the whole working group. You've been at the company longer than half the room.\n\nSomeone tries to correct him — and gets your name wrong. A second person corrects the correction, also wrong. The real version of your name never makes it into the conversation.\n\nThe meeting moves on to the next agenda item.",
    choices: [
      {
        label: "Say your name clearly when you next speak",
        type: "Fight",
        consequence: "Fifteen minutes later, when you make a point, you start with, \"Just to introduce myself properly — I'm [your name], and I've been leading this workstream since January.\" It lands. A few people look apologetic. The meeting continues. You spent your capital on an introduction you shouldn't have needed.",
        monologue: "I just used a chunk of my speaking time to establish that I exist. That's time I could have spent on ideas. Other people get to walk into meetings and be known. I walked into this meeting and became a correction in other people's memories.",
        costs: { status: 14, certainty: 4, autonomy: 8, relatedness: 12, fairness: 10 },
      },
      {
        label: "Let it slide and contribute normally",
        type: "Flight",
        consequence: "You push past it and make your points. Nobody connects your contributions to a name they now associate with you. Two weeks later, you'll be CC'd on an email thread that credits your work to \"someone on the project team.\"",
        monologue: "I just decided that being nameless was easier than being memorable. Every time I do this, I'm teaching the room that I'm a function, not a person. Then I'm surprised when they don't remember me for promotions, for opportunities, for the room where the real decisions get made.",
        costs: { status: 18, certainty: 6, autonomy: 10, relatedness: 16, fairness: 12 },
      },
      {
        label: "Minimize your remaining contributions",
        type: "Freeze",
        consequence: "You answer direct questions and nothing more. You had three things you were going to raise. None of them come out of your mouth. The meeting ends and you've functionally withdrawn from your own project.",
        monologue: "I just lost a meeting's worth of contribution because someone got my name wrong twice. That sounds disproportionate until you remember it wasn't just the name — it was the feeling of being a ghost in a room I've been working in for three months. My brain protected me by turning the volume down. The cost is mine. And the company's.",
        costs: { status: 20, certainty: 8, autonomy: 14, relatedness: 18, fairness: 10 },
      },
    ],
  },
  {
    id: 18,
    domain: "STATUS",
    setting: "4:45 PM · END-OF-DAY FEEDBACK",
    negBehavior: "Personal attacks · Cutting feedback · Competency questioned",
    narrative: "Your manager pings you on Slack: \"Got a sec?\" You jump on a quick call.\n\n\"Hey — just wanted to flag something. In the meeting earlier, when you asked that follow-up question about the timeline? It came across a bit aggressive. Maybe soften it next time.\"\n\nYou ask for context. She can't remember the exact words. She heard about it from someone else. She can't say who. She just wants you to \"be aware.\"",
    choices: [
      {
        label: "Ask to meet with the person who flagged it",
        type: "Fight",
        consequence: "You say, \"Can we get the three of us in a room so I can understand the specific concern?\" Your manager tenses. \"That would be awkward — let's just keep it between us.\" The concern is now unfalsifiable and permanent. You can't fix what you can't see.",
        monologue: "I just asked for due process and got told it would be awkward. The system protects the person who complained and exposes the person complained about. Whoever flagged this knows nothing will come back to them. I know everything will come back to me. That asymmetry is the entire story of how feedback works around here.",
        costs: { status: 16, certainty: 12, autonomy: 10, relatedness: 8, fairness: 20 },
      },
      {
        label: "Accept the feedback and apologize",
        type: "Flight",
        consequence: "You say, \"Got it, I'll be more careful.\" You spend the next month softening everything. Your contributions in meetings become hedged, qualified, padded with \"I might be wrong but.\" Your manager notes in her next check-in that you seem \"less engaged lately.\"",
        monologue: "I just agreed to police my own tone based on anonymous feedback I can't verify. Now I'm second-guessing every sentence before it leaves my mouth. That's not becoming a better communicator — that's learning to be smaller. And smaller looks a lot like disengaged, which is the next complaint I'm going to get.",
        costs: { status: 20, certainty: 14, autonomy: 22, relatedness: 10, fairness: 16 },
      },
      {
        label: "End the call quickly and go quiet",
        type: "Freeze",
        consequence: "You say \"okay, thanks for letting me know\" and end the call. You don't ask a single question in the team meeting tomorrow. Or the day after. Or the day after that. Your voice becomes a thing you ration.",
        monologue: "I just learned that asking questions is risky. Not the content of the questions — the fact of them. Someone is watching and grading how I sound, and I don't know who or why. So my brain does the only rational thing: it shuts off the faucet. The company just lost my curiosity because it couldn't protect me from anonymous complaints.",
        costs: { status: 22, certainty: 18, autonomy: 20, relatedness: 14, fairness: 18 },
      },
    ],
  },

  // ─────────── CERTAINTY ───────────
  {
    id: 4,
    domain: "CERTAINTY",
    setting: "11:00 AM · SURPRISE REORG EMAIL",
    negBehavior: "Withholding information · No transparency · Chaotic behavior",
    narrative: "An email from the VP drops. Your team is being \"realigned\" under a new business unit. No one told you this was coming. The email is upbeat — \"exciting new chapter\" — but three of your projects are now in limbo.\n\nYou check Slack. Some people seem to already know. Your manager's calendar shows she had a meeting about this yesterday. She didn't mention it in your 1:1 this morning.\n\nThe information existed. It just didn't flow to you.",
    choices: [
      {
        label: "Ask your manager directly why you weren't told",
        type: "Fight",
        consequence: "You message her: \"Did you know about this yesterday?\" She responds: \"I wasn't allowed to share yet — you understand.\" You do understand the policy. But understanding doesn't fix the fact that you spent this morning planning work that no longer matters.\n\nSome people were in the loop. You weren't. You're left to wonder why.",
        monologue: "\"You understand\" — that phrase does heavy lifting. It asks me to accept being excluded from information that directly affects my job and be gracious about it. My brain is now running a background process: what else don't I know? That uncertainty tax will eat my focus for the rest of the week.",
        costs: { status: 6, certainty: 16, autonomy: 10, relatedness: 12, fairness: 8 },
      },
      {
        label: "Adapt — start replanning immediately",
        type: "Flight",
        consequence: "You spend the next two hours mapping your projects to the new structure, figuring out which survive and which die. Nobody asked you to do this — but someone has to, and you know it won't be done well if you don't.",
        monologue: "I just absorbed organizational chaos by turning it into personal labor. That's unpaid change management. The people who made this decision will never know what it cost to implement, because I made it look seamless. Resilience is invisible when it works.",
        costs: { status: 4, certainty: 14, autonomy: 12, relatedness: 6, fairness: 16 },
      },
      {
        label: "Disengage — wait for someone to tell you what's happening",
        type: "Freeze",
        consequence: "You close the email. You don't Slack anyone. You do busywork for the rest of the morning, waiting for clarity that doesn't arrive. By noon, you've accomplished nothing of substance.",
        monologue: "When the brain can't predict what's coming, it conserves energy. That's not laziness — that's biology. My certainty domain just got blown up, and my prefrontal cortex is saying: don't invest in anything that might evaporate. So I'm idling. An entire morning of productivity, gone — not to incompetence, but to an environment that withholds information.",
        costs: { status: 8, certainty: 22, autonomy: 16, relatedness: 8, fairness: 10 },
      },
    ],
  },
  {
    id: 5,
    domain: "CERTAINTY",
    setting: "10:00 AM · SPRINT PLANNING",
    negBehavior: "Chaotic behavior · Poor decision-making · Constantly changing plans",
    narrative: "Halfway through the sprint, leadership changes priorities. Again. That's three times this quarter.\n\nYour last two weeks of work just became irrelevant. No explanation. No acknowledgment. Your manager says, in the tone of someone who's been trained to say it, \"We need to be agile.\"\n\nYou hear: your time doesn't matter. And the agility is all one-directional — it's always you absorbing the whiplash, never leadership.",
    choices: [
      {
        label: "Ask what changed and why",
        type: "Fight",
        consequence: "You ask the question directly in the meeting. Your manager pauses, then gives a vague answer about \"strategic alignment.\" A few teammates glance at each other. Nobody follows up. You asked the question everyone was thinking, and the room noted you as the one willing to say it.",
        monologue: "I just used my social capital to ask for the basic respect of an explanation. The answer was corporate noise. What I learned is that \"agile\" is the word we use when leadership changes its mind, and \"strategic\" is the word we use when no one wants to admit they don't know why. I'm not losing faith in the work. I'm losing faith in the frame.",
        costs: { status: 10, certainty: 18, autonomy: 8, relatedness: 8, fairness: 14 },
      },
      {
        label: "Pivot hard and replan the sprint",
        type: "Flight",
        consequence: "You spend the rest of the day remapping your work. You stay late to get it done. Nobody asks how much you threw away. Nobody thanks you for the pivot. It just becomes the new normal — until it changes again in three weeks.",
        monologue: "I'm absorbing organizational chaos and calling it adaptability. That's not resilience — that's learned helplessness with a professional veneer. Each time I pivot without complaint, I'm teaching the system that there's no cost to these reversals. The cost is there. It's just invisible, and it's landing entirely on me.",
        costs: { status: 6, certainty: 22, autonomy: 14, relatedness: 6, fairness: 18 },
      },
      {
        label: "Stop investing deeply in the new plan",
        type: "Freeze",
        consequence: "You do the minimum to look like you're engaged with the new priority. You hold back your best thinking, knowing it'll probably be discarded in three weeks anyway. The quality of your work quietly drops. Nobody notices because the whole org is doing the same math.",
        monologue: "I stopped investing because the environment made investment irrational. That's the prefrontal cortex going offline and the amygdala taking over resource allocation. The company is still paying my salary. They're just getting the version of me that's running on threat response. Nobody will ever do a root cause analysis on this drop in quality — but it started today.",
        costs: { status: 8, certainty: 26, autonomy: 18, relatedness: 10, fairness: 14 },
      },
    ],
  },
  {
    id: 6,
    domain: "CERTAINTY",
    setting: "2:00 PM · CROSS-FUNCTIONAL MEETING",
    negBehavior: "Withholding information · No transparency · Unseen forces at work",
    narrative: "You arrive at a meeting prepared to discuss the topic on the calendar invite. Two minutes in, it's clear the real decision was already made in a conversation you weren't part of.\n\nThe meeting is theater. You're an audience member who thought you were a participant. The decision will be announced at the end as if it just emerged from the discussion.\n\nYou recognize this format. You've been in it before. You'll be in it again.",
    choices: [
      {
        label: "Name what you're seeing",
        type: "Fight",
        consequence: "You say, \"It sounds like we're working toward a specific outcome — is that a decision that's already been made, or are we actually evaluating options?\" Silence. The facilitator laughs uncomfortably and says, \"Good question — we're just aligning.\" Nobody answers the question. The meeting continues its performance.",
        monologue: "I just named a dynamic everyone in the room could feel and nobody wanted to acknowledge. The reward for that is being the uncomfortable person. The alternative is pretending the decision is being made in front of me when it was actually made somewhere I wasn't invited. Either I pay the social cost of honesty or I pay the integrity cost of the performance. There's no third option.",
        costs: { status: 12, certainty: 16, autonomy: 10, relatedness: 12, fairness: 14 },
      },
      {
        label: "Play along and participate",
        type: "Flight",
        consequence: "You contribute thoughtful points as if the conversation is real. You help make the pre-decided outcome look collaborative. At the end, the decision is announced, and you go back to your desk having spent an hour performing democracy.",
        monologue: "I just did unpaid theater. I added legitimacy to a decision that wasn't mine to make, and the record will show I was \"part of\" it. If it goes badly, I'll share the blame. If it goes well, I won't share the credit. The whole meeting was a mechanism for distributing risk and concentrating authority. And I participated on autopilot.",
        costs: { status: 6, certainty: 20, autonomy: 18, relatedness: 10, fairness: 16 },
      },
      {
        label: "Disengage — take notes and say nothing",
        type: "Freeze",
        consequence: "You open a document and start writing unrelated work during the meeting. You answer direct questions with short, generic responses. The facilitator thinks you're distracted. You think you're conserving energy for work that might actually matter.",
        monologue: "I opted out of the performance. That's not disengagement from my job — that's protecting the parts of my brain that still do good work. The meeting is a certainty trap: I can't predict anything useful about it, so investing in it is a losing bet. I'm triaging. And triage, at scale, is what quiet quitting actually looks like from the inside.",
        costs: { status: 8, certainty: 24, autonomy: 16, relatedness: 14, fairness: 12 },
      },
    ],
  },
  {
    id: 19,
    domain: "CERTAINTY",
    setting: "9:00 AM · MONDAY 1:1",
    negBehavior: "Unclear goals · Unseen forces at work · No transparency",
    narrative: "Over the past six months, your responsibilities have roughly doubled. Nobody asked. Nobody announced it. Your job description hasn't changed. Your title hasn't changed. Your pay hasn't changed.\n\nYou mention it in your 1:1. Your manager says, \"You're doing great — keep it up.\"\n\nYou can't tell if you've been rewarded with more work or set up to fail at a job you were never officially given.",
    choices: [
      {
        label: "Ask directly if this is a path to promotion",
        type: "Fight",
        consequence: "You ask the question outright. She deflects: \"Let's see how the next quarter goes.\" That's the third time she's said that. You're now officially on a treadmill where more work leads to more work and the destination is perpetually next quarter.",
        monologue: "I asked for clarity on my own career and got \"let's see.\" That answer is a feature, not a bug. As long as the destination is vague, my effort can be extracted indefinitely without any corresponding commitment. The uncertainty isn't an accident — it's a business model, and I'm the margin.",
        costs: { status: 10, certainty: 20, autonomy: 14, relatedness: 8, fairness: 18 },
      },
      {
        label: "Keep going and hope it gets noticed",
        type: "Flight",
        consequence: "You decide to trust the process. You take on a seventh responsibility that comes in next week. You stay late three times that month. You tell yourself it'll pay off eventually.",
        monologue: "I just chose hope as a career strategy. I know hope is not a strategy. But the alternative is naming the problem, and I've seen what happens to people who do that. So I'm going to keep running on a treadmill and call it momentum. The cost isn't the extra hours — it's the quiet bargain I'm making with myself to pretend this is fine.",
        costs: { status: 8, certainty: 22, autonomy: 18, relatedness: 6, fairness: 20 },
      },
      {
        label: "Quietly stop picking up new work",
        type: "Freeze",
        consequence: "You start saying \"I'm at capacity\" for the first time. It feels uncomfortable. Your manager notices the slowdown and schedules a meeting about \"your engagement.\" You're about to get penalized for the boundary you should have been able to set six months ago.",
        monologue: "I finally held a line. And the system immediately flagged it as a performance concern. That's the trap in full view: absorbing invisible labor is rewarded with more invisible labor, and refusing it is labeled disengagement. There was never a safe place to stand. I'm just now finding out.",
        costs: { status: 14, certainty: 18, autonomy: 22, relatedness: 10, fairness: 24 },
      },
    ],
  },
  {
    id: 20,
    domain: "CERTAINTY",
    setting: "3:15 PM · PROJECT STATUS CHECK",
    negBehavior: "Unclear strategy · Many unknowns · Withholding information",
    narrative: "You've been working on this initiative for ten weeks. Leadership keeps saying it's \"a priority\" but the budget hasn't been confirmed. The launch date keeps moving. Three people who were supposed to support it have been quietly reassigned.\n\nYou don't know if you're building something important or spending your quarter on vaporware.\n\nYou ask your manager for a straight answer. She says, \"I'll check and get back to you.\" She doesn't.",
    choices: [
      {
        label: "Escalate to her manager",
        type: "Fight",
        consequence: "You go over her head. You get a carefully worded reply that says nothing. Your manager finds out. The next 1:1 is frosty. You got an answer about the project by becoming the problem.",
        monologue: "I escalated because the system wasn't giving me information I needed to do my job. The system responded by treating my need for information as a political act. That's not a communication failure — that's a feature of how power protects itself. I can have clarity or I can have goodwill. Apparently not both.",
        costs: { status: 14, certainty: 18, autonomy: 12, relatedness: 16, fairness: 20 },
      },
      {
        label: "Keep working as if it's real",
        type: "Flight",
        consequence: "You decide to keep shipping. If it turns out to be vaporware, at least you'll have something to show for the time. You bury the uncertainty under execution. It becomes harder to sleep on Sunday nights.",
        monologue: "I'm doing the work to avoid thinking about whether the work matters. That's a coping mechanism, not a strategy. My brain knows the difference even if my calendar doesn't. The Sunday-night dread isn't about Monday — it's about the six days I'm going to spend not knowing if any of it counts.",
        costs: { status: 6, certainty: 24, autonomy: 10, relatedness: 8, fairness: 16 },
      },
      {
        label: "Stop making real progress until you get clarity",
        type: "Freeze",
        consequence: "You shift into maintenance mode. You attend the meetings. You update the status doc. You don't move anything meaningfully forward. You're waiting for a signal that never comes.",
        monologue: "I just started coasting on a project I cared about two weeks ago. That's not because I stopped caring — it's because caring requires a minimum level of certainty, and I'm below the threshold. The project might launch. It might die. Either way, the version of me that was going to build it well just logged off.",
        costs: { status: 10, certainty: 26, autonomy: 18, relatedness: 6, fairness: 14 },
      },
    ],
  },

  // ─────────── AUTONOMY ───────────
  {
    id: 8,
    domain: "AUTONOMY",
    setting: "10:30 AM · ROUTINE APPROVAL REQUEST",
    negBehavior: "Micromanaging · Process over outcome · High anxiety",
    narrative: "You need approval to move forward on a routine decision — the kind of thing that should take five minutes and a quick yes.\n\nYou email your manager. No response for two days. You follow up. She asks you to write up a justification. You do. She schedules a meeting to discuss it. The meeting gets rescheduled twice.\n\nIt's now been a week. The decision still isn't made. You could have shipped the work twice over in the time it's taken to ask permission.",
    choices: [
      {
        label: "Push for the meeting to happen",
        type: "Fight",
        consequence: "You chase the meeting aggressively. It finally happens. She approves it in thirty seconds. She also notes in passing that you \"seem impatient lately.\" The approval is real. So is the new label.",
        monologue: "I advocated for my own productivity and got tagged as impatient. The system rewards waiting quietly and penalizes urgency, even when urgency is the rational response to friction. I'll remember this the next time I consider pushing. The next time, I probably won't.",
        costs: { status: 10, certainty: 8, autonomy: 16, relatedness: 10, fairness: 14 },
      },
      {
        label: "Keep waiting and work around it",
        type: "Flight",
        consequence: "You find workarounds for other tasks while the approval sits in limbo. You stop investing creative energy in problems that require permission. You start picking work based on what you can do without asking.",
        monologue: "I just quietly restructured my entire approach to work around someone else's bottleneck. That's not adaptation — that's my prefrontal cortex rerouting around a permanent obstacle. The cost is the ideas I'm no longer pursuing because they would require a meeting I don't have the energy to chase.",
        costs: { status: 6, certainty: 14, autonomy: 22, relatedness: 8, fairness: 16 },
      },
      {
        label: "Let the decision die on the vine",
        type: "Freeze",
        consequence: "You stop chasing it. The decision never gets made. The work doesn't happen. Nobody notices because it was the kind of thing that only you were thinking about. The organization is slightly worse off in a way that will never be attributed to this meeting.",
        monologue: "Something good just didn't happen, and the reason will never be traceable to the cause. That's how autonomy death works — not in one big moment but in the accumulation of small ideas that quietly stop being pursued. The company isn't losing my competence. It's losing my initiative. And initiative doesn't come back just because someone finally approves a meeting.",
        costs: { status: 8, certainty: 16, autonomy: 26, relatedness: 10, fairness: 12 },
      },
    ],
  },
  {
    id: 21,
    domain: "AUTONOMY",
    setting: "8:15 AM · MONDAY CALENDAR OPEN",
    negBehavior: "Controlling outcomes · Process over outcome · Micromanaging",
    narrative: "You open your calendar Monday morning and find six new recurring meetings someone added over the weekend. None of them were discussed with you. Two of them conflict with your focus time. One of them is labeled \"optional\" but you know from experience it's not.\n\nYour week just got taken from you before you even logged in.",
    choices: [
      {
        label: "Decline the ones that conflict with focus time",
        type: "Fight",
        consequence: "You decline two of them with a polite note. Within an hour, your manager messages: \"Can you hop on that one? It's important to have a unified presence.\" The \"optional\" meeting is no longer optional. You're back to six.",
        monologue: "I tried to reclaim two hours of my week and got gently told no. \"Unified presence\" is the language used to describe attendance that isn't really a choice. The meetings aren't optional. The word \"optional\" is just there to make declining feel like my fault when I get called out for it.",
        costs: { status: 10, certainty: 12, autonomy: 18, relatedness: 8, fairness: 14 },
      },
      {
        label: "Accept all six and rearrange your week",
        type: "Flight",
        consequence: "You move your focus work to evenings. You'll catch up this weekend. This happens three more times in the next two months before you start noticing a pattern in your exhaustion.",
        monologue: "I just agreed to do my real work on my own time so the company could have me available for performative meetings during business hours. That's a silent labor transfer. Nobody will ever tally the evening hours. They'll just see me \"committed to the team,\" right up until I burn out and get labeled a retention risk.",
        costs: { status: 6, certainty: 10, autonomy: 24, relatedness: 8, fairness: 18 },
      },
      {
        label: "Let the meetings happen and multitask through them",
        type: "Freeze",
        consequence: "You attend all six with your camera off and work on other things during them. You absorb maybe 20% of the content. When you get asked a direct question, you say \"could you repeat that?\" and hope nobody notices the pattern.",
        monologue: "I'm physically present and cognitively elsewhere, and that gap is the only autonomy I have left. It's also the thing that will eventually get me in trouble. The organization took my time without asking. I'm taking it back by not being mentally in the room. Neither of us is going to admit this is the arrangement. But it is.",
        costs: { status: 12, certainty: 14, autonomy: 22, relatedness: 12, fairness: 16 },
      },
    ],
  },
  {
    id: 22,
    domain: "AUTONOMY",
    setting: "1:45 PM · TOOL REQUEST",
    negBehavior: "Only one right way · Rejecting new ideas · Process over outcome",
    narrative: "You've found a better way to do a routine part of your job. A new tool would save you three hours a week. Minimum.\n\nYou ask if you can switch. The answer is a month-long approval process involving IT, procurement, your manager, and someone called a \"tooling governance lead\" you didn't know existed.\n\nThe current tool is worse. The new tool is free. Three hours a week, forever, because the system is cheaper to maintain than it is to improve.",
    choices: [
      {
        label: "Start the approval process anyway",
        type: "Fight",
        consequence: "You fill out the forms. You sit through the meetings. Six weeks later, the request is denied because \"we can't support non-standard tooling.\" You've now spent more time on the approval than you would have saved in the first year of using the tool.",
        monologue: "I just paid a tax in hours to be told I can't save hours. The math is absurd. But the math isn't really the point — the point is that the system values control more than it values my time. I'm not angry about the tool. I'm angry that I had to learn, concretely, how little my time is worth to the people who claim to value it.",
        costs: { status: 10, certainty: 12, autonomy: 22, relatedness: 8, fairness: 20 },
      },
      {
        label: "Keep using the old tool",
        type: "Flight",
        consequence: "You give up and keep using the slower method. Three hours a week, forever. You stop suggesting improvements. The next time you find a better way to do something, you won't mention it.",
        monologue: "This is the moment I stopped being an improver. Not with a big decision — with a small surrender. The next person who has an idea will run into the same wall, and I won't warn them, because warning them would be admitting I gave up. So the org just lost a function it never knew I was performing: caring enough to suggest changes.",
        costs: { status: 6, certainty: 14, autonomy: 26, relatedness: 10, fairness: 18 },
      },
      {
        label: "Use the new tool unofficially and don't tell anyone",
        type: "Freeze",
        consequence: "You download it. You use it. You don't mention it in any meeting or document. You've saved three hours and taken on the quiet stress of hoping nobody finds out. Autonomy purchased with anxiety.",
        monologue: "I'm operating in the shadow version of my own job now. That's what happens when the official path is broken: people route around it and call it productivity. The company thinks its governance is working. In reality, it's just pushing decisions into places they can't see. Every shadow workflow is a signal, and nobody's listening.",
        costs: { status: 8, certainty: 16, autonomy: 20, relatedness: 14, fairness: 12 },
      },
    ],
  },

  // ─────────── RELATEDNESS ───────────
  {
    id: 10,
    domain: "RELATEDNESS",
    setting: "11:40 AM · SLACK CHANNEL",
    negBehavior: "Alienation · Lack of empathy · Transactional environment",
    narrative: "#general is active. Someone posted a meme about \"that one coworker who always brings weird food to the office.\" Laughing emojis are rolling in. The meme isn't about you specifically. But it's about people like you. You've seen your lunches get that look before.\n\nNobody is being malicious. That almost makes it worse.",
    choices: [
      {
        label: "Say something in the thread",
        type: "Fight",
        consequence: "You type: \"Hey — might want to be careful with this one. Some of us bring food that's tied to our culture, and it can land weird when that's the punchline.\" The typing indicators appear. Then disappear. Someone reacts with 👍. The thread goes silent.",
        monologue: "I said the thing. And now I'm the person who made it uncomfortable. I didn't ruin the fun — I revealed that the fun had a cost. But I'll be the one who carries the weight of this moment, not them. The awkwardness is free for everyone except me.",
        costs: { status: 8, certainty: 6, autonomy: 10, relatedness: 16, fairness: 12 },
      },
      {
        label: "Add a laughing emoji and play along",
        type: "Flight",
        consequence: "You react with 😂. You even add a comment: \"guilty as charged lol.\" People love it. You're a good sport. The channel moves on. You close Slack and stare at your lunch for a minute before deciding not to eat it at your desk today.",
        monologue: "I just made a joke out of something that actually stings. I performed belonging by participating in my own erasure. And the thing is — it worked. They think I'm one of them now. The price was a small piece of myself I won't get back.",
        costs: { status: 10, certainty: 4, autonomy: 8, relatedness: 20, fairness: 10 },
      },
      {
        label: "Close Slack entirely",
        type: "Freeze",
        consequence: "You close the tab. It's fine. It's just Slack. You focus on work. Twenty minutes later you realize you missed a question from a teammate in a different channel. You're behind now — all because one meme made the whole platform feel unsafe for twenty minutes.",
        monologue: "I withdrew from the whole platform because one space didn't feel safe. That's the tax — you don't just lose the one moment, you lose the ecosystem around it. The company thinks its collaboration tools are working. For me, today, they just stopped.",
        costs: { status: 8, certainty: 8, autonomy: 12, relatedness: 24, fairness: 10 },
      },
    ],
  },
  {
    id: 11,
    domain: "RELATEDNESS",
    setting: "12:30 PM · TEAM LUNCH",
    negBehavior: "Transactional environment · Disconnected · Lack of trust",
    narrative: "The team goes to lunch. The conversation turns to weekend plans — someone's golf trip, someone's lake house, someone's kid's lacrosse tournament. It's warm. It's bonding.\n\nNobody's being exclusive on purpose. But the shared references, the assumed experiences, the easy shorthand — none of it maps to your life. You smile, you nod, you laugh at the right moments.\n\nNobody notices that you haven't actually said anything about yourself.",
    choices: [
      {
        label: "Share something real from your weekend",
        type: "Fight",
        consequence: "You mention what you actually did. There's a brief pause — not hostile, just unfamiliar. Someone says \"Oh, cool!\" with slightly too much enthusiasm. The conversation shifts to something else. You participated. It cost a small piece of authenticity to translate your life into their frame.",
        monologue: "I shared something real and it became a cultural exhibit for three seconds before they moved on. They weren't rude. They just don't have a frame for my experience. So every time I show up authentically, I'm also doing translation work. That's exhausting in a way that \"culture fit\" was never designed to measure.",
        costs: { status: 6, certainty: 4, autonomy: 8, relatedness: 16, fairness: 6 },
      },
      {
        label: "Play the listener — draw them out instead",
        type: "Flight",
        consequence: "You ask follow-up questions about the golf trip. You're good at this — drawing others out, being the easy audience. People love talking to you. What they don't realize is that the intimacy flows in only one direction.",
        monologue: "I'm performing connection. It looks like belonging but it's actually management — I'm managing their comfort by keeping the spotlight on them. The more I do this, the more they think we're close. The more I know we're not.",
        costs: { status: 4, certainty: 6, autonomy: 10, relatedness: 22, fairness: 8 },
      },
      {
        label: "Skip the group lunch next time",
        type: "Freeze",
        consequence: "You make a mental note: eat at your desk next time. More efficient anyway. In two months, someone will note you're \"not really a team player\" without ever asking why.",
        monologue: "Withdrawal looks like preference from the outside. They'll think I'm introverted. They'll never connect it to the fact that every group interaction costs me energy they don't spend. I'm not losing relatedness because I don't want it. I'm losing it because the environment makes it too expensive to pursue authentically.",
        costs: { status: 8, certainty: 4, autonomy: 6, relatedness: 26, fairness: 8 },
      },
    ],
  },
  {
    id: 12,
    domain: "RELATEDNESS",
    setting: "2:00 PM · 1:1 WITH YOUR MANAGER",
    negBehavior: "No empathy (performative) · Lack of trust · Not accountable",
    narrative: "Your manager is genuinely trying. She opens with: \"I wanted to check in — I know it can be hard being one of the only [people like you] on the team. I just want you to know I see you.\"\n\nShe means well. You know she means well. But now you're responsible for managing her feelings about your identity on top of your actual job.\n\nShe's waiting for you to respond in a way that affirms she's a good ally.",
    choices: [
      {
        label: "Be honest about how the comment landed",
        type: "Fight",
        consequence: "\"I appreciate the intent. But honestly? When you name my difference like that, it puts me in a position where I have to respond to being different rather than just being good at my job.\" She pauses. She looks hurt. She says, \"I didn't mean it that way.\" You know.",
        monologue: "I told the truth. She heard it as criticism. Now I have to decide whether to spend our next 1:1 repairing this, or just let her feel bad and hope she grows from it. Either way, I'm managing the relationship around my identity instead of my work.",
        costs: { status: 8, certainty: 8, autonomy: 10, relatedness: 18, fairness: 12 },
      },
      {
        label: "Thank her and redirect to project updates",
        type: "Flight",
        consequence: "\"I appreciate that — really.\" You smile. You pivot to deliverables. She seems relieved. The rest of the 1:1 is productive. But you spent the first three minutes doing emotional labor for your manager's comfort.",
        monologue: "She wanted me to validate that she's a good ally. I did. That's the invisible work — managing other people's feelings about my identity so they don't have to sit in the discomfort. Nobody tracks that in a performance review.",
        costs: { status: 10, certainty: 6, autonomy: 8, relatedness: 22, fairness: 14 },
      },
      {
        label: "Smile flatly and move on internally",
        type: "Freeze",
        consequence: "\"Thanks.\" One word. You move on. She doesn't notice the flatness. The rest of the 1:1 covers deliverables. You leave feeling like she checked a box she didn't know was a box.",
        monologue: "She thinks we had a moment. I think I just got reminded that I'm a category before I'm a colleague. The loneliest part of this job is the gap between what they think happened and what actually happened. And I don't have the energy to close that gap today.",
        costs: { status: 12, certainty: 10, autonomy: 14, relatedness: 24, fairness: 10 },
      },
    ],
  },
  {
    id: 23,
    domain: "RELATEDNESS",
    setting: "3:45 PM · HALLWAY CHECK-IN",
    negBehavior: "Transactional environment · Not accountable · Lack of empathy",
    narrative: "A colleague stops by your desk. \"How's it going?\" You start to answer honestly — you've had a rough week.\n\nTwo sentences in, you see his eyes drift to his phone. He says \"Totally, totally\" without looking up. Then he remembers something he needs to do and leaves mid-sentence.\n\nYou stand there holding the rest of your thought.",
    choices: [
      {
        label: "Send him a Slack message later to finish the conversation",
        type: "Fight",
        consequence: "You message him that evening: \"Hey — wanted to finish what I was saying earlier.\" He responds hours later: \"Oh! Sorry, crazy day. What's up?\" You type out the original thought. He sends a thumbs up. You feel worse than you did before you started.",
        monologue: "I tried to reopen a door that had been politely closed. The reopening was awkward, the closure was inevitable, and I'm left with the exact feeling the interaction was supposed to prevent: a small, confirmed loneliness. The check-in was a social transaction, not a real question. And I treated it like a real question.",
        costs: { status: 8, certainty: 6, autonomy: 6, relatedness: 18, fairness: 10 },
      },
      {
        label: "Let it go and remember not to be vulnerable next time",
        type: "Flight",
        consequence: "You file it away. The next time someone asks how you're doing, you say \"good, you?\" and mean nothing by it. You've been trained. The environment just taught you how to be less of yourself, and you learned quickly.",
        monologue: "I just updated my internal model of this workplace. \"How's it going\" is not a question. It's a verbal handshake. Anyone who answers it with actual content is committing a category error. I won't make that mistake again. And something real just died in the space where that mistake used to be possible.",
        costs: { status: 6, certainty: 8, autonomy: 10, relatedness: 22, fairness: 8 },
      },
      {
        label: "Stop initiating conversations for the rest of the day",
        type: "Freeze",
        consequence: "You don't say a word to anyone for the next three hours. You respond to Slack messages but don't start any. At the end of the day you realize you haven't spoken out loud since the hallway moment. Nobody noticed.",
        monologue: "One interrupted sentence cost me an afternoon of connection with the whole team. That's disproportionate — until you remember that the brain registers rejection on the same neural pathways as physical pain. My system is protecting me from re-injury. The cost is real human contact I needed and didn't get.",
        costs: { status: 8, certainty: 10, autonomy: 8, relatedness: 26, fairness: 6 },
      },
    ],
  },
  {
    id: 24,
    domain: "RELATEDNESS",
    setting: "4:20 PM · TEAM CHANNEL",
    negBehavior: "Alienation · Disconnected · Lack of trust",
    narrative: "You post a genuine question in the team Slack channel. Something you actually need input on. You hit send.\n\nNo reaction. No response.\n\nTwo hours later, a colleague posts something similar. Seven replies in five minutes. A whole thread of help.\n\nYou re-read your original post trying to figure out what you did wrong. You didn't do anything wrong. But your brain will spend the rest of the afternoon looking for the mistake.",
    choices: [
      {
        label: "Tag specific people in your original post",
        type: "Fight",
        consequence: "You go back and @ three people who should have known the answer. Two of them respond within an hour with brief, clipped replies. The third doesn't respond at all. You got your answer. You also learned exactly who sees you and who doesn't.",
        monologue: "I just did the thing nobody's supposed to have to do — explicitly request visibility from people who should have seen me on their own. The answer I got was transactional at best. What I really learned wasn't about the question. It was about where I rank in the invisible social order of this channel. Knowing the rank doesn't make it easier.",
        costs: { status: 12, certainty: 8, autonomy: 10, relatedness: 18, fairness: 14 },
      },
      {
        label: "Delete your original post and don't repost",
        type: "Flight",
        consequence: "You delete it. You figure out the answer on your own. It takes an extra hour you didn't have. Nobody notices the deletion. Nobody notices the question was never asked.",
        monologue: "I erased the evidence that I tried to reach out. That's a new kind of self-protection — not avoiding the ask, but retroactively pretending I never made it. The loneliness is one thing. The shame about the loneliness is another. I just quietly added both to my workday.",
        costs: { status: 10, certainty: 6, autonomy: 8, relatedness: 22, fairness: 10 },
      },
      {
        label: "Stop posting in shared channels",
        type: "Freeze",
        consequence: "Going forward, you only DM specific people. You never post in #team again. Your visibility drops. Your manager notices in two months and asks if you're \"engaged.\" You say yes. You're lying, but only a little.",
        monologue: "I just opted out of a public square because the public square made it clear I wasn't welcome in it. That withdrawal will eventually be labeled a performance issue. The performance issue will eventually be attributed to me. The original cause — a room that didn't see me — will never appear in any report. That's how the accounting works around here.",
        costs: { status: 14, certainty: 10, autonomy: 12, relatedness: 26, fairness: 12 },
      },
    ],
  },

  // ─────────── FAIRNESS ───────────
  {
    id: 13,
    domain: "FAIRNESS",
    setting: "3:00 PM · PERFORMANCE CALIBRATION LEAK",
    negBehavior: "Picking favorites · Acting on biases · Arbitrary standards",
    narrative: "A colleague lets slip that calibration scores were discussed in a leadership meeting last week. Apparently your rating was debated — someone argued you \"need more visibility with senior leaders\" before moving to the next level.\n\nYou've hit every metric. You've exceeded most. But \"visibility\" is the gate — and nobody told you it was a gate until after the decision was made.\n\nThe criteria that matter were never written down. The people who advance seem to already know the unwritten rules.",
    choices: [
      {
        label: "Request a meeting to discuss the criteria",
        type: "Fight",
        consequence: "You email your manager: \"Can we talk about what 'visibility' means specifically?\" She sets up time. But the advice is vague: \"Just get in front of more people.\" You leave with the same question repackaged as an answer.",
        monologue: "The system has rules that aren't rules — they're instincts that certain people absorbed before they got here. I'm reverse-engineering a game others were handed the playbook for. Fairness isn't just about equal treatment — it's about transparent standards. When the criteria keep shifting, my brain stops trusting the system. And once trust breaks, everything becomes a threat.",
        costs: { status: 10, certainty: 12, autonomy: 8, relatedness: 6, fairness: 18 },
      },
      {
        label: "Put your head down and overdeliver",
        type: "Flight",
        consequence: "You decide to make the work undeniable. You take on a stretch project, volunteer for a cross-functional initiative, stay late. Three months later, you'll learn the promotion went to someone who golfs with the SVP.",
        monologue: "I'm responding to an unfair system by working harder inside it. That's the meritocracy trap — it makes you blame yourself when the system doesn't deliver. The goalposts moved, but I'm the one running farther. My brain is screaming that this exchange isn't equitable, and it's right.",
        costs: { status: 8, certainty: 10, autonomy: 14, relatedness: 8, fairness: 22 },
      },
      {
        label: "Quietly start exploring other roles",
        type: "Freeze",
        consequence: "That evening, you update your LinkedIn settings to \"Open to opportunities.\" It's not dramatic. It's not angry. It's the rational response to discovering the game was never fair.",
        monologue: "This is how companies lose their best people — not in a blowup, but on a quiet Tuesday when someone realizes the system isn't built for them. I'm not leaving because of one bad review. I'm leaving because I just learned the rules were never the rules.",
        costs: { status: 14, certainty: 16, autonomy: 10, relatedness: 10, fairness: 26 },
      },
    ],
  },
  {
    id: 15,
    domain: "FAIRNESS",
    setting: "9:45 AM · PROJECT RETROSPECTIVE",
    negBehavior: "Arbitrary application of standards · Broken promises · Fickle rule changes",
    narrative: "Your project is being evaluated against criteria that didn't exist when you started it. A new VP introduced a framework last month. Now your six months of work is being scored against metrics you never knew you were supposed to hit.\n\nNobody apologizes for the mismatch. The implication is that you should have anticipated a framework that didn't exist yet.\n\nYou're being held to a standard that was invented after the work was done.",
    choices: [
      {
        label: "Point out that these weren't the criteria when you started",
        type: "Fight",
        consequence: "You raise the objection in the meeting. The VP says, \"That's a fair point — but we have to evaluate against current standards.\" He doesn't adjust the score. Your objection is now in the record as resistance to \"current standards.\" You were right. You still lost.",
        monologue: "I just named a retroactive unfairness and got told that current standards apply. There's no appeal to a principle of consistency because consistency was never the principle. The principle is: whatever the VP decided this month is the rule, and anything before that is your problem to absorb. Knowing that doesn't help me. It just makes me more tired.",
        costs: { status: 12, certainty: 14, autonomy: 10, relatedness: 6, fairness: 20 },
      },
      {
        label: "Accept the lower score and rebuild",
        type: "Flight",
        consequence: "You take the hit. You commit to the new framework. You begin quietly rewriting six months of work to look compliant with rules that weren't rules when you did the work. Nobody thanks you for the rework.",
        monologue: "I just paid a tax in time to make old work look like it met new standards. That's pure overhead — productivity consumed by political weather. The next time a framework changes, I'll do the same thing. And the next. The only skill that actually gets rewarded here is the skill of absorbing shifting goalposts without complaint.",
        costs: { status: 8, certainty: 18, autonomy: 14, relatedness: 6, fairness: 24 },
      },
      {
        label: "Stop investing meaningfully in any future project",
        type: "Freeze",
        consequence: "You don't say anything. But something shifts. Going forward, you'll do the minimum work required to ship on time. You won't go deep on anything. Why would you? Depth is punished when the rules change.",
        monologue: "I just stopped being a craftsman. Not because I don't care about craft — because caring became a liability. Depth is what gets scored against metrics that don't yet exist. Shallow work is harder to retroactively fail. So I'm going shallow. The company will call this a productivity problem. It's actually a trust problem wearing a productivity costume.",
        costs: { status: 10, certainty: 20, autonomy: 22, relatedness: 8, fairness: 26 },
      },
    ],
  },
  {
    id: 25,
    domain: "FAIRNESS",
    setting: "4:00 PM · COFFEE-ROOM OVERHEAR",
    negBehavior: "Picking favorites · Acting on biases · Broken promises",
    narrative: "You overhear — by accident — that a high-visibility stretch project was offered to your peer last month. Nobody asked you. You would have said yes.\n\nYou ask your manager about it. She says: \"Oh — I figured you had too much on your plate already. I was looking out for you.\"\n\nYou didn't ask to be looked out for. You asked to be considered.",
    choices: [
      {
        label: "Tell her directly that you'd like to be considered next time",
        type: "Fight",
        consequence: "You say, \"I appreciate that — but I'd rather you ask me than make that call for me.\" She says, \"Of course, of course.\" You can tell she's uncomfortable. You can also tell the next stretch opportunity will go to someone else again, because asking to be considered is now itself a form of \"friction.\"",
        monologue: "I just advocated for my own career and got a polite acknowledgment that will change nothing. \"Looking out for me\" is the frame that lets her make decisions about my opportunities without consulting me. Naming the pattern doesn't break the pattern — it just adds me to the list of people who are \"hard to manage.\"",
        costs: { status: 14, certainty: 12, autonomy: 14, relatedness: 8, fairness: 18 },
      },
      {
        label: "Let it go — she probably meant well",
        type: "Flight",
        consequence: "You tell yourself she meant well. You decide not to push it. You notice, over the next three months, that three more opportunities go to the same peer. You never ask why. You already know why, and asking won't fix it.",
        monologue: "I just watched opportunity get allocated around me and decided not to make it a conversation. That's not grace — that's the calculation that raising it would cost more than the opportunity itself. The trap is that this calculation is individually rational and cumulatively devastating. Every \"let it go\" is a line item in the story of why I eventually left.",
        costs: { status: 12, certainty: 14, autonomy: 16, relatedness: 10, fairness: 22 },
      },
      {
        label: "Quietly update your résumé that night",
        type: "Freeze",
        consequence: "You don't say anything. You open your résumé when you get home and update your accomplishments. You're not planning to leave. You just want the document to be ready. The decision to leave will happen in a month or two. Tonight is just preparation.",
        monologue: "This is the moment I stopped believing the promotion narrative I was told. Not in a big dramatic flash — in a quiet evening spent updating a document. The company will register my departure in two months as a surprise. It's been inevitable since this afternoon. I just haven't told anyone yet. Not even myself, really.",
        costs: { status: 16, certainty: 18, autonomy: 14, relatedness: 10, fairness: 26 },
      },
    ],
  },
];

// ============================================================
// IDENTITY PROFILES
// ============================================================

export const PROFILES = [
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Senior Data Analyst",
    tenure: "2 years at the company",
    context: "You're sharp, reliable, and consistently deliver. You're also the only person on your team who didn't come up through the company's internal pipeline — and sometimes that shapes how your competence gets read in the room.",
    avatar: "PS",
  },
  {
    id: "marcus",
    name: "Marcus Tomlinson",
    role: "Product Manager",
    tenure: "14 months at the company",
    context: "You're known for strong ideas and clear communication. You're also one of two Black men on a 40-person product team — and you've learned that how your confidence lands depends heavily on who's listening.",
    avatar: "MT",
  },
  {
    id: "elena",
    name: "Elena Vasquez",
    role: "Senior Engineer",
    tenure: "3 years at the company",
    context: "Your ship rate is among the highest in the org. You're also 54, working on a team whose average age is 31 — and you've noticed that \"innovative\" is a word they reserve for other people.",
    avatar: "EV",
  },
];

// ============================================================
// SELECTION
// ============================================================

export function selectScenarios() {
  const domains = ["STATUS", "CERTAINTY", "AUTONOMY", "RELATEDNESS", "FAIRNESS"];
  const shuffled = [...domains].sort(() => Math.random() - 0.5);
  const selectedDomains = shuffled.slice(0, 4);

  const selected = selectedDomains.map((domain) => {
    const candidates = SCENARIOS.filter((s) => s.domain === domain);
    return candidates[Math.floor(Math.random() * candidates.length)];
  });

  const parseTime = (setting) => {
    const match = setting.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return 0;
    let [, h, m, period] = match;
    h = parseInt(h);
    m = parseInt(m);
    if (period.toUpperCase() === "PM" && h !== 12) h += 12;
    if (period.toUpperCase() === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };

  return selected.sort((a, b) => parseTime(a.setting) - parseTime(b.setting));
}

export function selectProfile() {
  return PROFILES[Math.floor(Math.random() * PROFILES.length)];
}
