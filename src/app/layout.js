import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HealthPriorityModal from "@/components/HealthPriorityModal";

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

// app/layout.js or app/layout.tsx

export const metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://pathomedix.com"),

  title: {
    default: "PathoMedix - Find Nearby Doctors, Labs & Medical Stores",
    template: "%s | PathoMedix",
  },

  description:
    "PathoMedix helps patients find nearby doctors, diagnostic labs, medical stores, and healthcare services. Book appointments, upload prescriptions, order medicines, and schedule home sample collection easily.",

  applicationName: "PathoMedix",

  keywords: [
    "PathoMedix",
    "doctor appointment booking",
    "nearby doctors",
    "medical store near me",
    "diagnostic lab near me",
    "blood test near me",
    "online doctor consultation",
    "healthcare app india",
    "medicine delivery",
    "prescription upload",
    "home sample collection",
    "pathology lab near me",
    "physiotherapist near me",
    "skin specialist",
    "cardiologist near me",
  ],

  authors: [
    {
      name: "PathoMedix",
      url: "https://pathomedix.com",
    },
  ],

  creator: "PathoMedix",
  publisher: "PathoMedix",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "PathoMedix - Nearby Doctors, Labs & Medical Stores",
    description:
      "Book doctor appointments, find nearby labs and medical stores, upload prescriptions, and access trusted healthcare services with PathoMedix.",

    url: "https://pathomedix.com",
    siteName: "PathoMedix",

    images: [
      {
        url: "https://pathomedix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "PathoMedix Healthcare Platform",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PathoMedix - Healthcare Made Easy",
    description:
      "Find nearby doctors, labs, and medicines. Book appointments and healthcare services instantly.",

    images: ["https://pathomedix.com/og-image.png"],
  },

  alternates: {
    canonical: "https://pathomedix.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "healthcare",

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dreamt.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <HealthPriorityModal />
        <Footer />
      </body>
    </html>
  );
}
