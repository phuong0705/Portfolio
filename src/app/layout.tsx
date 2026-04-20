import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.name} | ${PORTFOLIO_DATA.title}`,
  description: PORTFOLIO_DATA.shortIntro,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
