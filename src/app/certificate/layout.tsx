import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificado',
  description: 'Emitir Certificado',
};

export default function StudentLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
