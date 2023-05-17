'use server';
import { studentZodType } from '../../zod';
import { z } from 'zod';
import { prisma } from '@/lib/prisma-client';
import { revalidatePath } from 'next/cache';

export async function addStudent(data: z.infer<typeof studentZodType>) {
  const { id, createdAt, updatedAt, ...result } = data;
  await prisma.student.create({
    data: result,
  });
  revalidatePath('/student');
}

export async function removeStudent(id: string) {
  await prisma.student.delete({ where: { id } });
  revalidatePath('/student');
}
