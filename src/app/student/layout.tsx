import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estudante',
  description: 'Gerir Estudantes',
};

export default function StudentLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
