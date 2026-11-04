import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import { Nav, NavLinks } from "@/components/Nav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { themeScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = "Cloud and on-prem infrastructure. Projects, notes and experiments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://adnb.dev"),
  title: "Aidan Brown",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "adnb.dev",
    title: "Aidan Brown",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidan Brown",
    description,
  },
  // No favicon: an empty data URL stops browsers from requesting /favicon.ico.
  icons: { icon: "data:," },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6">
        <header className="flex items-center justify-between py-8">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            adnb.dev
          </Link>
          <div className="flex items-center gap-5">
            <Suspense fallback={<NavLinks active={null} />}>
              <Nav />
            </Suspense>
            <ThemeToggle />
          </div>
        </header>

        <main className="pb-16 pt-16">{children}</main>

        <footer className="flex items-center justify-between py-6 font-mono text-xs text-muted">
          <span>adnb.dev</span>
          <span title={`Built ${process.env.BUILD_DATE}`}>rev {process.env.BUILD_SHA}</span>
        </footer>
      </body>
    </html>
  );
}
