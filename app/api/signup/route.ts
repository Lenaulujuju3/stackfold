import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/auth"
import bcrypt from "bcrypt"

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 })
    }

    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 })
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { email, name: name ?? null, passwordHash },
      select: { id: true, email: true }
    })

    return NextResponse.json({ ok: true, user }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
