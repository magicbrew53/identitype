import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "The Psychological Safety Simulation",
  description:
    "A 5-minute experience inside one employee's Tuesday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}
