import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div />
        <div className='cursor-pointer fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a className='pointer-events-none group flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'>
            Por{' '}
            <div className='dark:bg-white bg-gray-900 h-4 w-4 rotate-0 duration-300'></div>
            <span>Theven</span>
          </a>
        </div>
      </div>

      <div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <span className='text-6xl font-bold text-center absolute -translate-x-1/2'>
          Emissão de Certificados Digitais
        </span>
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left'>
        <Link
          href='/student'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Registar{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Registe um estudante para emitir o seu certificado.
          </p>
        </Link>

        <Link
          href='/certificate'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Emitir{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Faça a emissão de um certificado.
          </p>
        </Link>
        <Link
          href='/verify'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-white hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Verificar{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Verifique se um certificado é valido
          </p>
        </Link>
      </div>
    </main>
  );
}
