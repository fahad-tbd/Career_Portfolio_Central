import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollAnimations from "@/components/animations/ScrollAnimations";
import NavigationHandler from "@/components/animations/NavigationHandler";
import FloatingActionButton from "@/components/ui/FloatingActionButton";
import { SITE_CONFIG } from "@/utils/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: '/assets/favicon/Career-Portfolio-Central_Favicon.png',
    shortcut: '/assets/favicon/Career-Portfolio-Central_Favicon.png',
    apple: '/assets/favicon/Career-Portfolio-Central_Favicon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [{
      url: '/assets/favicon/Career-Portfolio-Central_Favicon.png',
      width: 1200,
      height: 630,
      alt: SITE_CONFIG.name,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/assets/favicon/Career-Portfolio-Central_Favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon/Career-Portfolio-Central_Favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/favicon/Career-Portfolio-Central_Favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-brand-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16 lg:pt-18">
            {children}
          </main>
          <Footer />
          <ScrollAnimations />
          <NavigationHandler />
          <FloatingActionButton />
        </div>
      </body>
    </html>
  );
}
