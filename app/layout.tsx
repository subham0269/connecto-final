import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const overusedGrotesk = localFont({
  src: "../public/fonts/OverusedGroteskVF.woff",
  variable: "--font-overused-grotesk",
  weight: "300 900",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Connecto",
  description: "Watch movies together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${overusedGrotesk.variable} antialiased `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
