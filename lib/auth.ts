// lib/auth.ts
import "dotenv/config"
import type { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

// Prisma singleton (prevents multiple connections in dev)
const globalForPrisma = global as unknown as { prisma?: PrismaClient }
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Email & Password",
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null
        const user = await prisma.user.findUnique({ where: { email: creds.email } })
        if (!user?.passwordHash) return null
        const ok = await bcrypt.compare(creds.password, user.passwordHash)
        if (!ok) return null
        return { id: user.id, name: user.name ?? "User", email: user.email ?? undefined }
      },
    }),
  ],
  pages: { signIn: "/login" },
}
