import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvertisementModal from "@/components/AdvertisementModal";

const dreamt = localFont({
  src: [
    { path: "/fonts/dreamt_thin.woff2", weight: "100", style: "thing" },
    { path: "/fonts/dreamt_regular.woff2", weight: "300", style: "regular" },
    { path: "/fonts/dreamt_nurmal.woff2", weight: "400", style: "normal" },
    { path: "/fonts/dreamt_md.woff2", weight: "500", style: "meadum" },
    { path: "/fonts/dreamt_bold.woff2", weight: "700", style: "bold" },
  ],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://pathomedix.com"),

  title: {
    default: "PathoMedix Find Nearby Medical Stores & Labs",
    template: "%s | PathoMedix",
  },

  description:
    "PathoMedix helps you find nearby medical stores and diagnostic labs instantly. Upload prescriptions, search medicines, and connect with trusted healthcare providers near you.",

  keywords: [
    "medical store near me",
    "lab test near me",
    "diagnostic lab near me",
    "medicine search app",
    "prescription scanner",
    "PathoMedix",
  ],

  openGraph: {
    title: "PathoMedix - Nearby Medical Stores & Labs",
    description:
      "Search medicines, upload prescriptions, and find nearby labs with PathoMedix.",
    url: "https://pathomedix.com",
    siteName: "PathoMedix",
    images: [
      {
        url: "https://pathomedix.com/og-image.png", // full URL important
        width: 1200,
        height: 630,
        alt: "PathoMedix Healthcare App",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PathoMedix - Healthcare Made Easy",
    description:
      "Find medicines and labs near you. Upload prescriptions and connect instantly.",
    images: ["https://pathomedix.com/og-image.png"],
  },

  alternates: {
    canonical: "https://pathomedix.com",
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dreamt.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <AdvertisementModal />
        <Footer />
      </body>
    </html>
  );
}
