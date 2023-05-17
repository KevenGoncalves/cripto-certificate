import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verificar',
  description: 'Verificar Certificado',
};

export default function StudentLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
