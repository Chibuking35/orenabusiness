import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orena",
  description:
    "Orena is a creative branding company that specializes in personalized designs for T-shirts, mugs, bottles, and more. We turn your ideas into unique products that reflect your style, your story, and your brand. Whether for individuals, events, or businesses, Orena delivers high-quality customization — made just for you.",
  icons: {
    icon: "/madeforyou-logo.ico",
    apple: [{ url: "/madeforyou-logo.ico", sizes: "180x180" }],
  },
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
        <Navbar /> {children}<Footer/>
      </body>
    </html>
  );
}
