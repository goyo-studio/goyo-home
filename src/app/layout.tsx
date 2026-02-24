import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { organizationJsonLd } from "@/lib/jsonld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goyostudio.io"),
  title: {
    default: "Goyo Studio - Building minimal software",
    template: "%s - Goyo Studio",
  },
  description: "Simplifying, refining — steadily.",
  openGraph: {
    type: "website",
    siteName: "Goyo Studio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@goyo_studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased h-full font-primary`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
