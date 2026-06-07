import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 

const inter = Inter({subsets : ["latin"]});


export const metadata: Metadata = {
  title: "ArcaStack | Enterprise Digital Engineering & 24/7 Optimization",
  description: "High-performance web, mobile and automation solutions. We provide 24/7 technical optimization to ensure your enterprise infrastructure never sleeps. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
        <body className={`${inter.className} bg-white text-slate-900`}>
     <Navbar />
     <main>{children}</main>
        <Footer />
        </body>
    </html>
  );
}
