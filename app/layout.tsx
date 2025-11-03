import "./globals.css";import type { Metadata } from "next";import Link from "next/link";
export const metadata: Metadata={title:"StackFold — Data Intelligence & Lead Marketplace",description:"Indices, signals, and lead data engineered for performance."};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body>
<header className="nav"><div className="container nav-inner">
<div className="brand">Stack<span>Fold</span></div>
<nav><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/indices">Indices</Link><Link href="/pricing">Pricing</Link><Link href="/dashboard">Dashboard</Link><Link href="/sell">Sell</Link><Link href="/contact" className="btn btn-outline">Contact</Link><Link href="/login" className="btn btn-solid">Login</Link></nav>
</div></header>
{children}
<footer className="footer"><div className="container"><div className="cols">
<div><div className="font-bold text-slate-100 mb-2">StackFold</div><ul><li>Indices</li><li>Signals</li><li>Leads</li></ul></div>
<div><div className="font-bold text-slate-100 mb-2">Company</div><ul><li><Link href="/about">About</Link></li><li><Link href="/pricing">Pricing</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
<div><div className="font-bold text-slate-100 mb-2">Legal</div><ul><li>Privacy</li><li>Terms</li><li>Compliance</li></ul></div>
</div><div className="copy">© {new Date().getFullYear()} StackFold.</div></div></footer>
</body></html>)}