import type { Metadata } from "next";
import { Inter, Manrope, Newsreader } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplashScreen } from "@/components/splash-screen";
import { site } from "@/lib/content";

import "./globals.css";

const splashBootScript = `
try {
  if (
    sessionStorage.getItem("spravbyt-splash-seen") !== "1" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    document.documentElement.classList.add("splash-pending");
    window.setTimeout(function () {
      document.documentElement.classList.remove("splash-pending");
    }, 3000);
  }
} catch (e) {}
`;

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Správa bytových domov, Banská Bystrica`,
    template: `%s | ${site.name}`,
  },
  description:
    "SPRAVBYT s.r.o. poskytuje od roku 1996 služby v oblasti správy bytových a nebytových priestorov v Banskej Bystrici a okolí.",
  metadataBase: new URL("https://spravbyt.sk"),
  openGraph: {
    title: `${site.name} | Správa bytových domov`,
    description:
      "Spoľahlivá správa bytových domov v Banskej Bystrici a okolí od roku 1996.",
    locale: "sk_SK",
    type: "website",
  },
  icons: {
    icon: "/logo-spravbyt.png",
    apple: "/logo-spravbyt.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${manrope.variable} ${inter.variable} ${newsreader.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script id="splash-boot" strategy="beforeInteractive">
          {splashBootScript}
        </Script>
        <SplashScreen />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
