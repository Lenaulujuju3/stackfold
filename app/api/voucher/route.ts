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
