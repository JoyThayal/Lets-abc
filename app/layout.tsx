import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://letsabc.co.uk"),
  title: {
    default: "Lets ABC | UK Premium Film Production",
    template: "%s | Lets ABC",
  },
  description:
    "Lets ABC is a premium UK production house creating luxury feature films, commercial advertising, and music videos for ambitious brands and artists.",
  keywords: [
    "UK film production",
    "premium video production",
    "commercial advertising",
    "music video production",
    "Lets ABC",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lets ABC | UK Premium Film Production",
    description:
      "Luxury film production, commercial advertising and music video creation for ambitious brands and artists.",
    url: "https://letsabc.co.uk",
    siteName: "Lets ABC",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning>
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
