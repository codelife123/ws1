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
  openGraph: {
    title: "Ranga ArcTech - Professional Welding & Iron Workshop",
    description: "Professional welding and iron work services. Custom metal fabrication, structural welding, and industrial solutions. Quality workmanship you can trust from Ranga ArcTech.",
    url: "https://www.rangaarctech.com/",
    siteName: "Ranga ArcTech",
    images: [
      {
        url: "/project-work/image1.jpg",
        width: 1200,
        height: 630,
        alt: "Ranga ArcTech Workshop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ranga ArcTech",
          "image": "https://www.rangaarctech.com/project-work/image1.jpg",
          "url": "https://www.rangaarctech.com/",
          "telephone": "+94 70 311 4427",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "315/2 Rajawella, Digana",
            "addressLocality": "Kandy",
            "addressCountry": "Sri Lanka"
          },
          "sameAs": [
            "http://www.facebook.com/RangaArcTech",
            "https://www.youtube.com/@RangaArcTech"
          ]
        }` }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
