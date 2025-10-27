#!/bin/bash

# Script to create StackFold project files
# Run this in an empty directory: bash this_script.sh
# Then: npm install, npx prisma db push, npx prisma generate, ts-node prisma/seed.ts, npm run dev

mkdir -p app/api/auth/[...nextauth]
mkdir -p app/api/voucher
mkdir -p app/about
mkdir -p app/contact
mkdir -p app/dashboard
mkdir -p app/login
mkdir -p app/packages
mkdir -p app/products
mkdir -p app/register
mkdir -p app/sell
mkdir -p components
mkdir -p lib
mkdir -p prisma
mkdir -p public
touch .env.example
touch .gitignore
touch middleware.ts
touch next.config.mjs
touch package.json
touch README.md
touch tailwind.config.ts
touch tsconfig.json
touch app/globals.css
touch app/layout.tsx
touch app/page.tsx
touch app/about/page.tsx
touch app/contact/page.tsx
touch app/dashboard/page.tsx
touch app/login/page.tsx
touch app/packages/page.tsx
touch app/products/page.tsx
touch app/register/page.tsx
touch app/sell/page.tsx
touch app/api/auth/[...nextauth]/route.ts
touch app/api/voucher/route.ts
touch components/Carousel.tsx
touch components/Chart.tsx
touch components/ContactForm.tsx
touch components/DashboardContent.tsx
touch components/Hero.tsx
touch components/LoginForm.tsx
touch components/PackageCard.tsx
touch components/ProductCard.tsx
touch components/RegisterForm.tsx
touch components/SellForm.tsx
touch components/VerticalCard.tsx
touch lib/auth.ts
touch lib/utils.ts
touch prisma/schema.prisma
touch prisma/seed.ts

# .env.example
cat << EOF > .env.example
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"  # Generate a strong secret
NEXTAUTH_URL="http://localhost:3000"
EOF

# .gitignore
cat << EOF > .gitignore
# dependencies
/node_modules

# production
/build
/.next

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# prisma
prisma/dev.db
EOF

# package.json
cat << EOF > package.json
{
  "name": "stackfold",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push",
    "seed": "ts-node prisma/seed.ts"
  },
  "dependencies": {
    "@next-auth/prisma-adapter": "^1.2.0",
    "@prisma/client": "^5.20.0",
    "bcryptjs": "^2.4.3",
    "next": "14.2.13",
    "next-auth": "^4.24.7",
    "papaparse": "^5.4.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.12.7"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/papaparse": "^5.3.14",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "prisma": "^5.20.0",
    "tailwindcss": "^3.4.1",
    "ts-node": "^10.9.2",
    "typescript": "^5"
  }
}
EOF

# README.md
cat << EOF > README.md
# StackFold

StackFold Leads and Market Indices (StackFold) - A platform for data analytics, leads, and indices.

## Setup

1. Copy \`.env.example\` to \`.env\` and fill in values.
2. Run \`npm install\`
3. Run \`npm run db:push\` to set up database schema.
4. Run \`npm run seed\` to seed sample data.
5. Run \`npm run dev\` for development server.
6. For production: \`npm run build && npm start\`

## Environment Variables

- DATABASE_URL: SQLite file path (file:./dev.db)
- NEXTAUTH_SECRET: Secret for NextAuth
- NEXTAUTH_URL: Base URL of the app

## Deployment

Deploy to Vercel or similar Next.js hosting. Swap SQLite to Postgres by changing DATABASE_URL.

## Features

- Auth: Login/Register with email/password
- Protected Dashboard
- Products with voucher validation
- Sell page with CSV preview
- And more as per spec.

Note: Placeholder hero-bg.jpg in /public - replace with actual blurred skyline image.
EOF

# tailwind.config.ts
cat << EOF > tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#0d9488",
        blueGradientStart: "#1e40af",
        blueGradientEnd: "#3b82f6",
      },
      backgroundImage: {
        "hero-bg": "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
EOF

# tsconfig.json
cat << EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# next.config.mjs
cat << EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
EOF

# app/globals.css
cat << EOF > app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Inter', sans-serif;
}

.hero {
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  filter: blur(4px);
  -webkit-filter: blur(4px);
}

.transparent-section {
  background-color: rgba(255, 255, 255, 0.8);
}

.solid-card {
  background-color: white;
  border: 1px solid #e5e7eb;
}

.gradient-accent {
  background: linear-gradient(to right, #0d9488, #3b82f6);
}

.wave-divider {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f3f4f6' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,245.3C672,224,768,160,864,160C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  height: 100px;
  background-size: cover;
}
EOF

# prisma/schema.prisma
cat << EOF > prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id           String    @id @default(uuid())
  email        String    @unique
  name         String?
  role         String    @default("user")
  passwordHash String
  createdAt    DateTime  @default(now())
}

model Voucher {
  code       String    @id
  credits    Int
  note       String?
  expiresAt  DateTime?
  redeemedBy String?
}

model LeadPackage {
  id      String @id @default(uuid())
  title   String
  vertical String
  summary String
}

model IndexProduct {
  id      String @id @default(uuid())
  title   String
  summary String
}

model Bundle {
  id      String @id @default(uuid())
  title   String
  summary String
}
EOF

# prisma/seed.ts
cat << EOF > prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Seed users
  const hashedPassword = await bcrypt.hash('password', 10);
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      role: 'admin',
      passwordHash: hashedPassword,
    },
  });
  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'User',
      role: 'user',
      passwordHash: hashedPassword,
    },
  });

  // Seed vouchers
  await prisma.voucher.createMany({
    data: [
      { code: 'STACK-GUEST-50', credits: 50, note: 'Guest access' },
      { code: 'STACK-TRIAL-25', credits: 25, note: 'Trial' },
      { code: 'STACK-VIP-100', credits: 100, note: 'VIP' },
    ],
    skipDuplicates: true,
  });

  // Seed lead packages
  await prisma.leadPackage.createMany({
    data: [
      { title: 'Tech Leads', vertical: 'Technology', summary: 'High-quality tech industry leads.' },
      { title: 'Finance Leads', vertical: 'Finance', summary: 'Finance sector leads.' },
    ],
    skipDuplicates: true,
  });

  // Seed index products
  await prisma.indexProduct.createMany({
    data: [
      { title: 'Market Index A', summary: 'Custom market index.' },
      { title: 'Industry Index B', summary: 'Industry-specific index.' },
    ],
    skipDuplicates: true,
  });

  // Seed bundles
  await prisma.bundle.createMany({
    data: [
      { title: 'Leads + Indices Bundle', summary: 'Combined package.' },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.\$disconnect();
  });
EOF

# lib/auth.ts
cat << EOF > lib/auth.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.passwordHash) {
          return null;
        }
        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!isValid) {
          return null;
        }
        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
};
EOF

# app/api/auth/[...nextauth]/route.ts
cat << EOF > app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
EOF

# middleware.ts
cat << EOF > middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/dashboard"],
};
EOF

# app/layout.tsx
cat << EOF > app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
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
        <SessionProvider>
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
        </SessionProvider>
      </body>
    </html>
  );
}
EOF

# app/page.tsx (Home)
cat << EOF > app/page.tsx
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import PackageCard from "@/components/PackageCard";
import SellForm from "@/components/SellForm";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const verticals = [
    "Technology", "Finance", "Healthcare", "Education", "Retail", "Manufacturing",
    "Real Estate", "Automotive", "Energy", "Media", "Hospitality", "Telecom",
    "Agriculture", "Transportation", "Entertainment", "Construction"
  ];

  return (
    <main>
      <Hero />
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">The StackFold Difference</h2>
        <p>StackFold leverages large-scale signals and custom indices to drive efficiency in data analytics and lead generation.</p>
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Verticals</h2>
        <Carousel items={verticals.map(v => ({ title: v, icon: "📊" }))} />
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <PackageCard title="Leads" description="High-quality leads for your business." />
        <PackageCard title="Indices" description="Custom market indices." />
        <PackageCard title="Leads+Indices" description="Combined packages for comprehensive insights." />
        <PackageCard title="View Products" description="Explore our catalogue." link="/products" />
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PackageCard title="Basic" bullets={["Access to leads", "Basic analytics"]} />
          <PackageCard title="Pro" bullets={["Full leads access", "Advanced indices"]} />
          <PackageCard title="Enterprise" bullets={["Custom solutions", "Dedicated support"]} />
        </div>
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Seller Portal Application</h2>
        <SellForm />
      </section>
      <div className="wave-divider" />
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <ContactForm />
      </section>
    </main>
  );
}
EOF

# components/Hero.tsx
cat << EOF > components/Hero.tsx
export default function Hero() {
  return (
    <div className="hero h-96 flex items-center justify-center text-white text-4xl font-bold">
      <div className="bg-black bg-opacity-50 p-8 rounded">
        StackFold Leads and Market Indices
      </div>
    </div>
  );
}
EOF

# components/Carousel.tsx
cat << EOF > components/Carousel.tsx
interface Item {
  title: string;
  icon: string;
}

interface Props {
  items: Item[];
}

export default function Carousel({ items }: Props) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-4">
      {items.map((item, idx) => (
        <div key={idx} className="solid-card snap-center min-w-[200px] p-4 text-center">
          <div className="text-4xl mb-2">{item.icon}</div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
EOF

# components/PackageCard.tsx
cat << EOF > components/PackageCard.tsx
import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  bullets?: string[];
  link?: string;
}

export default function PackageCard({ title, description, bullets, link }: Props) {
  const content = (
    <div className="solid-card p-4">
      <h3 className="font-bold">{title}</h3>
      {description && <p>{description}</p>}
      {bullets && (
        <ul className="list-disc pl-4">
          {bullets.map((b, idx) => <li key={idx}>{b}</li>)}
        </ul>
      )}
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}
EOF

# app/packages/page.tsx
cat << EOF > app/packages/page.tsx
import PackageCard from "@/components/PackageCard";

export default function Packages() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PackageCard title="Basic" bullets={["Access to basic leads", "Limited analytics"]} />
        <PackageCard title="Pro" bullets={["Full access to leads and indices", "Advanced tools"]} />
        <PackageCard title="Enterprise" bullets={["Customized solutions", "Priority support"]} />
      </div>
    </main>
  );
}
EOF

# app/products/page.tsx
cat << EOF > app/products/page.tsx
"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherInfo, setVoucherInfo] = useState<{ credits: number; note: string } | null>(null);
  const [error, setError] = useState("");

  const handleVoucherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/voucher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: voucherCode }),
    });
    if (res.ok) {
      const data = await res.json();
      setVoucherInfo(data);
      setError("");
    } else {
      setError("Invalid voucher");
      setVoucherInfo(null);
    }
  };

  // Sample catalogue - in real, fetch from DB
  const products = [
    { type: "lead", title: "Tech Leads", summary: "Technology leads" },
    { type: "index", title: "Market Index", summary: "Custom index" },
    { type: "bundle", title: "Leads + Indices", summary: "Bundle" },
  ];

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <form onSubmit={handleVoucherSubmit} className="mb-8">
        <input
          type="text"
          value={voucherCode}
          onChange={(e) => setVoucherCode(e.target.value)}
          placeholder="Enter voucher code"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Apply</button>
        {error && <p className="text-red-500">{error}</p>}
        {voucherInfo && (
          <p>Credits: {voucherInfo.credits}, Note: {voucherInfo.note}</p>
        )}
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p, idx) => <ProductCard key={idx} {...p} />)}
      </div>
    </main>
  );
}
EOF

# app/api/voucher/route.ts
cat << EOF > app/api/voucher/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { code } = await req.json();
  const voucher = await prisma.voucher.findUnique({ where: { code } });
  if (voucher) {
    return NextResponse.json({ credits: voucher.credits, note: voucher.note });
  }
  return NextResponse.json({ error: "Invalid voucher" }, { status: 404 });
}
EOF

# components/ProductCard.tsx
cat << EOF > components/ProductCard.tsx
interface Props {
  type: string;
  title: string;
  summary: string;
}

export default function ProductCard({ type, title, summary }: Props) {
  return (
    <div className="solid-card p-4">
      <h3 className="font-bold">{title}</h3>
      <p>{summary}</p>
      <p>Type: {type}</p>
    </div>
  );
}
EOF

# app/about/page.tsx
cat << EOF > app/about/page.tsx
export default function About() {
  return (
    <main>
      <div className="hero h-96 relative">
        <div className="absolute inset-0 transparent-section flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About StackFold</h1>
            <p className="mt-4">StackFold is a leader in data analytics, lead generation, and custom indices creation.</p>
          </div>
        </div>
      </div>
      <div className="wave-divider" />
      <section className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="solid-card p-4">
          <h2>The StackFold Difference</h2>
          <p>Our indices and large-scale signals drive efficiency.</p>
        </div>
        {/* More cards */}
      </section>
    </main>
  );
}
EOF

# app/dashboard/page.tsx
cat << EOF > app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardContent from "@/components/DashboardContent";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardContent />
    </main>
  );
}
EOF

# components/DashboardContent.tsx
cat << EOF > components/DashboardContent.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  // More data
];

export default function DashboardContent() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="solid-card p-4">KPI 1: 100</div>
        <div className="solid-card p-4">KPI 2: 200</div>
        <div className="solid-card p-4">KPI 3: 300</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0d9488" />
          </BarChart>
        </ResponsiveContainer>
        {/* 2 more charts */}
      </div>
      <table className="w-full border">
        <thead><tr><th>Item</th><th>Value</th></tr></thead>
        <tbody><tr><td>Placeholder</td><td>Data</td></tr></tbody>
      </table>
    </div>
  );
}
EOF

# app/sell/page.tsx
cat << EOF > app/sell/page.tsx
import SellForm from "@/components/SellForm";

export default function Sell() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Sell Your Data</h1>
      <SellForm />
    </main>
  );
}
EOF

# components/SellForm.tsx
cat << EOF > components/SellForm.tsx
"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function SellForm() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      Papa.parse(selectedFile, {
        header: true,
        complete: (results) => {
          setPreview(results.data.slice(0, 5)); // Preview first 5 rows
        },
      });
    }
  };

  const requiredHeaders = ["email", "phone", "zip", "vertical"];

  return (
    <form>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {preview.length > 0 && (
        <div>
          <h3>Preview:</h3>
          <table className="border">
            <thead><tr>{Object.keys(preview[0]).map(h => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {preview.map((row, idx) => (
                <tr key={idx}>{Object.values(row).map((v, i) => <td key={i}>{v as string}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Submit</button>
    </form>
  );
}
EOF

# app/contact/page.tsx
cat << EOF > app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </main>
  );
}
EOF

# components/ContactForm.tsx
cat << EOF > components/ContactForm.tsx
export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form>
        <label>Full Name</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Company</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Position</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Email</label><input type="email" className="border block w-full p-2 mb-2" />
        <label>Phone</label><input type="tel" className="border block w-full p-2 mb-2" />
        <label>Message</label><textarea className="border block w-full p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
      </form>
      <form>
        <h2>Request Sample</h2>
        <label><input type="checkbox" /> Indices</label>
        <label><input type="checkbox" /> Leads</label>
        <label><input type="checkbox" /> Leads+Indices</label>
        <label>Company</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Requester</label><input type="text" className="border block w-full p-2 mb-2" />
        <label>Email</label><input type="email" className="border block w-full p-2 mb-2" />
        <label>Phone</label><input type="tel" className="border block w-full p-2 mb-2" />
        <label>Vertical</label><input type="text" className="border block w-full p-2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Request</button>
      </form>
    </div>
  );
}
EOF

# app/login/page.tsx
cat << EOF > app/login/page.tsx
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <LoginForm />
    </main>
  );
}
EOF

# components/LoginForm.tsx
cat << EOF > components/LoginForm.tsx
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border block w-full p-2 mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border block w-full p-2 mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
    </form>
  );
}
EOF

# app/register/page.tsx
cat << EOF > app/register/page.tsx
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Register</h1>
      <RegisterForm />
    </main>
  );
}
EOF

# components/RegisterForm.tsx
cat << EOF > components/RegisterForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    if (res.ok) {
      router.push("/login");
    } else {
      setError("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border block w-full p-2 mb-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border block w-full p-2 mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border block w-full p-2 mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
    </form>
  );
}
EOF

# app/api/register/route.ts (Add this file)
mkdir -p app/api/register
cat << EOF > app/api/register/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "User exists" }, { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: { email, name, passwordHash: hashedPassword },
  });
  return NextResponse.json({ success: true });
}
EOF

# public/hero-bg.jpg - Placeholder text file, replace with image
echo "Placeholder for blurred skyline image. Download a suitable image and place here." > public/hero-bg.jpg

# Repository Tree Preview
echo "Repository Tree:"
tree .