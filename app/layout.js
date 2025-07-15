import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ranga ArcTech - Professional Welding & Iron Workshop",
  description: "Professional welding and iron work services. Custom metal fabrication, structural welding, and industrial solutions. Quality workmanship you can trust from Ranga ArcTech.",
  keywords: "welding, iron works, metal fabrication, structural welding, industrial welding, custom metal work, Ranga ArcTech",
  authors: [{ name: "Ranga ArcTech" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
