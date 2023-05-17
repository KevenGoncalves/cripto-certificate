'use server';

import { prisma } from '@/lib/prisma-client';
import { certificateZodType } from '@/zod';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function createCertificate(
  data: z.infer<typeof certificateZodType>
) {
  await prisma.certificate.create({ data });
  revalidatePath('/certificate');
}
