'use client';
import { studentZodType } from '@/zod';
import { useState, useTransition } from 'react';
import { z } from 'zod';
import { addStudent } from './functions';

export default function CreateStudent() {
  const [_, startTransition] = useTransition();
  const [student, setStudent] = useState<z.infer<typeof studentZodType>>({
    name: '',
    birthdate: new Date(),
    course: '',
    period: '',
  });

  return (
    <div className='group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
      <h2
        className={`flex justify-between mb-3 text-center text-2xl font-semibold`}
      >
        Registar
        <button
          onClick={() =>
            startTransition(() =>
              addStudent(student).then(() =>
                setStudent({
                  name: '',
                  birthdate: new Date(),
                  course: '',
                  period: '',
                })
              )
            )
          }
          className=' inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
        >
          --&gt;
        </button>
      </h2>
      <form className={`grid grid-cols-4 gap-2 m-0  text-sm opacity-50`}>
        <div>
          <input
            value={student?.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            type='text'
            className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Nome'
            required
          />
        </div>
        <div>
          <input
            value={student.birthdate.toLocaleDateString('en-CA', {})}
            onChange={(e) =>
              setStudent({ ...student, birthdate: new Date(e.target.value) })
            }
            type='date'
            className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Data de Nascimento'
            required
          />
        </div>
        <div>
          <select
            value={student.course}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
            className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Curso'
            required
          >
            <option value=''>Escolha uma opção</option>
            <option value='Eng Informática'>Eng Informática</option>
            <option value='Eng Mecatronica'>Eng Mecatronica</option>
            <option value='Eng Civil'>Eng Civil</option>
          </select>
        </div>
        <div>
          <select
            value={student.period}
            onChange={(e) => setStudent({ ...student, period: e.target.value })}
            className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Periodo'
            required
          >
            <option value=''>Escolha uma opção</option>
            <option value='Laboral'>Laboral</option>
            <option value='Pós-Laboral'>Pós-Laboral</option>
          </select>
        </div>
      </form>
    </div>
  );
}
