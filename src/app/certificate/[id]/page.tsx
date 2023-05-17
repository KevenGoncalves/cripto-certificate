import { prisma } from '@/lib/prisma-client';
import PdfFile from './pdf';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await prisma.certificate.findFirst({
    where: { id: params.id },
    include: {
      student: true,
    },
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <PdfFile certificate={data!} />
    </main>
  );
}
