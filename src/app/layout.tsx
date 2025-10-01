import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PGS FM Ltd - Professional Security & Facilities Management",
  description: "Leading provider of security services, facilities management, and cleaning solutions across the UK. Professional, reliable, and comprehensive services for all sectors.",
  keywords: "security services, facilities management, cleaning services, UK, professional security, corporate protection, event security",
  authors: [{ name: "PGS FM Ltd" }],
  openGraph: {
    title: "PGS FM Ltd - Professional Security & Facilities Management",
    description: "Leading provider of security services, facilities management, and cleaning solutions across the UK.",
    url: "https://www.pgsfm.uk",
    siteName: "PGS FM Ltd",
    images: [
      {
        url: "https://placehold.co/1200x630?text=PGS+FM+Ltd+Professional+Security",
        width: 1200,
        height: 630,
        alt: "PGS FM Ltd Professional Security Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PGS FM Ltd - Professional Security & Facilities Management",
    description: "Leading provider of security services, facilities management, and cleaning solutions across the UK.",
    images: ["https://placehold.co/1200x630?text=PGS+FM+Ltd+Professional+Security"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
