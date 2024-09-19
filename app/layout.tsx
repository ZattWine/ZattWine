import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";

// components
import Header from "@/components/common/header";
// import StairTransition from "@/components/transitions/StairTransition";
import PageTransition from "@/components/transitions/PageTransition";

import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Kyaw Zayar Tun - Mobile Developer",
  description: "Personal portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${jetBrainsMono.className} bg-primary text-white`}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
