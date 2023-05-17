'use client';
import { useState } from 'react';
import CreateVerify from './create-verify';
import { z } from 'zod';
import { relatedCertificateZodType } from '@/zod';
import { CardVerify } from './card-verify';

export default function Page() {
  const [certificate, setCertificate] =
    useState<z.infer<typeof relatedCertificateZodType>>();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <span className='text-6xl font-bold text-center absolute -translate-x-1/2'>
          Verificar
        </span>
      </div>
      <div>
        <CardVerify certificate={certificate!} />
      </div>
      <CreateVerify certificate={certificate} setCertificate={setCertificate} />
    </main>
  );
}
