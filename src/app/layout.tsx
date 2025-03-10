import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hi Acuity",
  description:
    "HiAcuity is an automation technology and software development company. Our platform helps organisations assess the skills of job candidates, employees and partners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
