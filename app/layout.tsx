import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/unoloft/GoogleAnalytics";
import { OG_IMAGE_URL, SITE_NAME, SITE_URL } from "@/components/unoloft/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.webmanifest",
  title: {
    default: "Unoloft – Premium PG in Ahmedabad",
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  description:
    "Ahmedabad's premium paying guest accommodation for boys near Gota and SG Highway.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Unoloft Premium PG Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" data-mode="all">
      <head>
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          media="print"
          onLoad={(event) => {
            event.currentTarget.media = "all";
          }}
          crossOrigin="anonymous"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${cormorantGaramond.variable}`}
      >
        {gaMeasurementId ? (
          <GoogleAnalytics measurementId={gaMeasurementId} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
