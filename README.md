# StackFold

StackFold Leads and Market Indices (StackFold) - A platform for data analytics, leads, and indices.

## Setup

1. Copy `.env.example` to `.env` and fill in values.
2. Run `npm install`
3. Run `npm run db:push` to set up database schema.
4. Run `npm run seed` to seed sample data.
5. Run `npm run dev` for development server.
6. For production: `npm run build && npm start`

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
