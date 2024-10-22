import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const sfui = localFont({
  src: "./fonts/SF-UI-Display-Regular.ttf",
  variable: "--font-sfui",
});

export const metadata: Metadata = {
  title: "Shyld AI",
  description: "Powering Healthcare Intelligently",
  openGraph: {
    title: "Shyld AI",
    description: "Powering Healthcare Intelligently",
  },
  twitter: {
    title: "Shyld AI",
    description: "Powering Healthcare Intelligently",
  },
  keywords: ["healthcare AI", "patient monitoring", "intelligent healthcare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfui.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
