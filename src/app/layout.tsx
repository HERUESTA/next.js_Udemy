import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Next.js13-blog",
  description: "hello world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
