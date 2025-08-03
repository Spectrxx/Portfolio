import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { HeroHighlight } from "./components/ui/hero-highlight";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Muhammad Romi Nur Fauzi",
  description:
    "Situs portofolio Muhammad Romi Nur Fauzi yang menampilkan berbagai proyek dan pencapaian dalam pengembangan perangkat lunak dan teknologi web modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors dark:bg-black dark:text-white`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <HeroHighlight className="pt-0 w-full h-full">
            <main className="pt-36">{children}</main>
          </HeroHighlight>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
