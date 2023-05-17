'use client';
import { z } from 'zod';
import { studentZodType } from '@/zod';
import { useTransition } from 'react';
import { removeStudent } from './functions';

export const StudentCard = (props: z.infer<typeof studentZodType>) => {
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

        <button
          onClick={() => startTransition(() => removeStudent(props.id!))}
          className='text-transparent group-hover:text-red-500 duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={16}
            height={16}
            fill='currentColor'
            className='bi bi-trash-fill'
            viewBox='0 0 16 16'
          >
            <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
          </svg>
        </button>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {props.course} {props.period}
      </p>
    </div>
  );
};
