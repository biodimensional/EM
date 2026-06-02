import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://biodimensional.com"),
  title: {
    default: "Bi(o)Dimensional — Eros Montin PhD",
    template: "%s | Bi(o)Dimensional",
  },
  description:
    "Complex biomedical imaging, made understandable. Scientific portfolio and services by Eros Montin PhD — AI-powered imaging, MRI simulation, radiomics, and cloud software.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://biodimensional.com",
    siteName: "Bi(o)Dimensional",
    title: "Bi(o)Dimensional — Eros Montin PhD",
    description:
      "Complex biomedical imaging, made understandable. Scientific portfolio and services by Eros Montin PhD.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioDimensional — Eros Montin PhD",
    description: "Complex biomedical imaging, made understandable.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
