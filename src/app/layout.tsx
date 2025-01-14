"use client"; // This ensures the component runs on the client side

import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adjust weights as needed
});

export default function RootLayout({
  children,
  pageTitle = "Hi Acuity",
}: Readonly<{
  children: React.ReactNode;
  pageTitle?: string;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{pageTitle} | Hi Acuity</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body className={`${poppins.variable} antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
