import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ranga Iron Work - Professional Welding & Iron Workshop",
  description: "Professional welding and iron work services. Custom metal fabrication, structural welding, and industrial solutions. Quality workmanship you can trust.",
  keywords: "welding, iron work, metal fabrication, structural welding, industrial welding, custom metal work",
  authors: [{ name: "Ranga Iron Work" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
