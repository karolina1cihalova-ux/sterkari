import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STĚRKAŘI. | Workshop stěrkových stěn",
  description:
    "Naučte se nanášet stěrku sami — jednodenní workshop ve showroomu, materiály v balíku a podpora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={dmSans.variable}>
      <body className="antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
