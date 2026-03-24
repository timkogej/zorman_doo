import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
