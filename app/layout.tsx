import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackFold Leads and Market Indices",
  description: "Data analytics, leads, and indices platform",
  openGraph: {
    title: "StackFold",
    description: "Leads and Indices for your business",
    images: "/og-image.jpg", // Assume placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav className="gradient-accent text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="font-bold text-xl">StackFold</Link>
              <div className="space-x-4">
                <Link href="/packages" className="hover:text-teal transition-colors">Packages</Link>
                <Link href="/products" className="hover:text-teal transition-colors">Products</Link>
                <Link href="/about" className="hover:text-teal transition-colors">About</Link>
                <Link href="/dashboard" className="hover:text-teal transition-colors">Dashboard</Link>
                <Link href="/sell" className="hover:text-teal transition-colors">Sell</Link>
                <Link href="/contact" className="hover:text-teal transition-colors">Contact</Link>
                <Link href="/login" className="hover:text-teal transition-colors">Login</Link>
                <Link href="/register" className="hover:text-teal transition-colors">Register</Link>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
            &copy; 2025 StackFold. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}