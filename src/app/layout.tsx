import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import AIChatbot from "@/components/sections/AIChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healing Touch | Premium Homeopathic Clinic",
  description: "Advanced Homeopathic care for chronic and acute diseases. Leading clinic by Dr. Samuel Hahnemann Jr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <main className="relative z-0">
          {children}
        </main>
        <AIChatbot />
      </body>
    </html>
  );
}
