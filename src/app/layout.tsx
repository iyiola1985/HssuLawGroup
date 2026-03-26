import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { FIRM_CONTACT_EMAIL } from "@/lib/contact";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Angela W Hssu & Associates | Immigration Law | Los Angeles, CA",
    template: "%s | Angela W Hssu & Associates",
  },
  description:
    "Trusted immigration law firm in downtown Los Angeles. Family immigration, employment visas, green cards, deportation defense, and citizenship. Personalized strategy and experienced counsel.",
  keywords: [
    "immigration lawyer Los Angeles",
    "Angela W Hssu",
    "family immigration",
    "employment visa attorney",
    "green card lawyer",
    "deportation defense",
    "naturalization",
  ],
  openGraph: {
    title: "Angela W Hssu & Associates | Immigration Law",
    description:
      "Guiding individuals and families through U.S. immigration law from our Los Angeles office.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1c2c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Angela W Hssu & Associates Immigration Law",
  description:
    "Immigration law firm serving individuals and families in Los Angeles, California.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "355 S Grand Ave, Suite 2450",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90071",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Los Angeles" },
  email: FIRM_CONTACT_EMAIL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
