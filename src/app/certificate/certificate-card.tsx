'use client';
import { z } from 'zod';
import { relatedStudentZodType } from '@/zod';
import { useTransition } from 'react';
import { createCertificate } from './functions';

export const CertificateCard = (
  props: z.infer<typeof relatedStudentZodType>
) => {
  const [_, startTransition] = useTransition();

  return (
    <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
      <h2
        className={`mb-3 text-2xl flex gap-2 justify-between items-center font-semibold`}
      >
        <div className='flex gap-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='currentColor'
            className='bi bi-person-fill'
            viewBox='0 0 16 16'
          >
            <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
          </svg>
          {props.name}{' '}
        </div>
        {props.certificate ? (
          <button
            onClick={() =>
              window.open(`/certificate/${props.certificate?.id}`, '_blank')
            }
            className='text-transparent group-hover:text-green-500 duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='bi bi-file-earmark-check-fill'
              viewBox='0 0 16 16'
            >
              <path d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
            </svg>
          </button>
        ) : (
          <button
            onClick={() =>
              startTransition(() => createCertificate({ studentId: props.id! }))
            }
            className='text-transparent group-hover:text-red-500 duration-300'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={16}
              height={16}
              fill='currentColor'
              className='bi bi-file-earmark-excel-fill'
              viewBox='0 0 16 16'
            >
              <path d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64z' />
            </svg>
          </button>
        )}
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {props.course} {props.period}
      </p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-bold`}>
        {props.certificate?.id ? props.certificate?.id : null}
      </p>
    </div>
  );
};
