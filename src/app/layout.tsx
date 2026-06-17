import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Shimanta | Portfolio",
  description: "Crafting digital experiences that scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      {/* Added suppressHydrationWarning here to mute extension injection errors */}
      <body 
        className="bg-[#fafaf8] text-[#16181d] antialiased min-h-screen" 
        suppressHydrationWarning
      >
        <Navbar />
        <div className="pt-24 md:pt-32">
          {children}
        </div>
      </body>
    </html>
  );
}