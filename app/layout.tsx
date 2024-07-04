import type { Metadata } from "next";
import "./globals.css";

import { Changa } from "next/font/google";
import Nav from "@/components/ui/Nav";
const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo Learn | لينغو ليرن",
  description: "أفضل منصة تعليمية لتعلم جميع لغات العالم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={changa.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
