'use server';

import { prisma } from '@/lib/prisma-client';

export async function VerifyId(id: string) {
  return await prisma.certificate.findFirst({
    where: { id },
    include: {
      student: true,
    },
  });
}
