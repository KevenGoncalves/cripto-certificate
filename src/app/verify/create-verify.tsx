import { relatedCertificateZodType } from '@/zod';
import { Dispatch, SetStateAction, useState, useTransition } from 'react';
import { z } from 'zod';
import { VerifyId } from './functions';

export default function CreateVerify({
  setCertificate,
}: {
  certificate: undefined | z.infer<typeof relatedCertificateZodType>;
  setCertificate: Dispatch<
    SetStateAction<z.infer<typeof relatedCertificateZodType> | undefined>
  >;
}) {
  const [_, startTransition] = useTransition();
  const [id, setId] = useState('');

  return (
    <div className='group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
      <h2
        className={`flex justify-between mb-3 text-center text-2xl font-semibold`}
      >
        Digite o ID
        <button
          onClick={() =>
            startTransition(() =>
              VerifyId(id).then((data: any) => {
                setCertificate(data);
                setId('');
              })
            )
          }
          className=' inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
        >
          --&gt;
        </button>
      </h2>
      <form className={`grid grid-cols-1 gap-2 m-0  text-sm opacity-50`}>
        <div>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type='text'
            className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='ID'
            required
          />
        </div>
      </form>
    </div>
  );
}
