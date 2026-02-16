import type { Metadata } from "next";
import { playfairDisplay, montserrat } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mark Sutcliffe — UX Strategy & Design",
    template: "%s | Mark Sutcliffe",
  },
  description:
    "Portfolio of Mark Sutcliffe — UX Strategist and Designer specializing in user experience strategy, experience design, and brand identity.",
  openGraph: {
    title: "Mark Sutcliffe — UX Strategy & Design",
    description:
      "Portfolio of Mark Sutcliffe — UX Strategist and Designer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable}`}
    >
      <body className="font-body antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
