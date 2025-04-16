import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "../public/logo.svg";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "DITL | Day in the Life",
  description:
    "Discover how people around the world spend their 24 hours. Share your daily routine and explore others' time management.",
  keywords: [
    "daily routine",
    "time management",
    "productivity",
    "lifestyle",
    "work-life balance",
  ],
  authors: [{ name: "DITL" }],
  creator: "DITL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b">
          <div className="container flex h-16 items-center px-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} height={40} alt="DITL Logo" />
            </Link>
          </div>
        </header>
        <main className="mx-8">{children}</main>
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} DITL. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
