import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import cn from "../../lib/cn";



const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://thinkiverse.vercel.app"),
  title: {
    default: "Thinkiverse",
    template: "Thinkiverse | %s"
  },
  description: "A playground of quirky thoughts & experiments!",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Thinkiverse - A playground of quirky thoughts & experiments!",
    description: "A playground of quirky thoughts & experiments!",
    images: ["/thinkiverse-og.png"],
  },
  keywords: [
    "interactive experiments",
    "quirky games",
    "stimulations",
    "thought-provoking games",
    "digital playground",
    "creative experiences",
    "mind-blowing facts",
    "AI debates",
    "infinite craft game",
    "real-time global trackers",
    "social experiments",
    "fun online activities",
    "educational games",
    "online games",
    "games"
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          quicksand.variable, fredoka.variable,
          quicksand.className,
          "antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
