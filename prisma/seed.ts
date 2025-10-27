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
  });

  // Seed lead packages
  await prisma.leadPackage.createMany({
    data: [
      { title: 'Tech Leads', vertical: 'Technology', summary: 'High-quality tech industry leads.' },
      { title: 'Finance Leads', vertical: 'Finance', summary: 'Finance sector leads.' },
    ],
  });

  // Seed index products
  await prisma.indexProduct.createMany({
    data: [
      { title: 'Market Index A', summary: 'Custom market index.' },
      { title: 'Industry Index B', summary: 'Industry-specific index.' },
    ],
  });

  // Seed bundles
  await prisma.bundle.createMany({
    data: [
      { title: 'Leads + Indices Bundle', summary: 'Combined package.' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });