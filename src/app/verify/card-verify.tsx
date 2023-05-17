import { z } from 'zod';
import { relatedCertificateZodType } from '@/zod';

export const CardVerify = ({
  certificate,
}: {
  certificate: z.infer<typeof relatedCertificateZodType>;
}) => {
  if (!certificate) return null;
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
          {certificate?.student?.name}{' '}
        </div>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {certificate?.student?.course} {certificate?.student?.period}
      </p>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-bold`}>
        {certificate?.id ? certificate.id : null}
      </p>
    </div>
  );
};
