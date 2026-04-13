import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fasaderstvo Zorman | Strokovnjaki za kontaktne fasade",
  description:
    "Več kot 25 let izkušenj z izdelavo toplotno izolacijskih fasad. Weber, Baumit, JUB, Demit sistemi. Brezplačen ogled in ponudba.",
  keywords:
    "fasaderstvo, kontaktne fasade, ETICS, toplotna izolacija, Mojstrana, Gorenjska, Weber, Baumit, JUB, Demit",
  openGraph: {
    title: "Fasaderstvo Zorman",
    description:
      "Strokovnjaki za kontaktne fasade z več kot 25 let izkušenj",
    locale: "sl_SI",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zorman d.o.o. Mojstrana",
  url: "https://fasaderstvo-zorman.si",
  logo: "https://fasaderstvo-zorman.si/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
