import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";  // Add this import
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
        <Providers>  {/* Wrap here */}
          <nav className="bg-gradient-accent text-white p-4">
            <div className="container mx-auto flex justify-between">
              <Link href="/" className="font-bold">StackFold</Link>
              <div>
                <Link href="/packages" className="mx-2">Packages</Link>
                <Link href="/products" className="mx-2">Products</Link>
                <Link href="/about" className="mx-2">About</Link>
                <Link href="/dashboard" className="mx-2">Dashboard</Link>
                <Link href="/sell" className="mx-2">Sell</Link>
                <Link href="/contact" className="mx-2">Contact</Link>
                <Link href="/login" className="mx-2">Login</Link>
                <Link href="/register" className="mx-2">Register</Link>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gray-800 text-white p-4 text-center">
            &copy; 2025 StackFold. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}