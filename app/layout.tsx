

import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Components
import { MotionConfig } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { Metadata } from "next";
import ScrollToTop from "@/components/ScrollToTop";


const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alive Amazônia — A floresta que respira o planeta",
  description:
    "Uma jornada visual e interativa pela maior floresta tropical do planeta: números, fauna e curiosidades da Amazônia.",
  openGraph: {
    title: "Alive Amazônia",
    description: "Uma jornada visual pela maior floresta tropical do planeta.",
    images: ["/crescer.png"], 
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>
        <MotionConfig reducedMotion="user">
          <SmoothScroll>
            {children}
            <ScrollToTop />
          </SmoothScroll>
        </MotionConfig>
        </body>
    </html>
  );
}
