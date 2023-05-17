'use client';

import { relatedCertificateZodType } from '@/zod';
import { z } from 'zod';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((component) => component.PDFViewer),
  {
    ssr: false,
  }
);

export default function PdfFile({
  certificate,
}: {
  certificate: z.infer<typeof relatedCertificateZodType> | undefined;
}) {
  return (
    <PDFViewer
      showToolbar
      height='100vh'
      width='100%'
      style={{ height: '100vh' }}
    >
      <Document>
        <Page size='A4'>
          <View
            style={{
              fontSize: 12,
              padding: 10,
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Text>Universidade Zambeze</Text>
            <Text>
              Certificado de Conclusão dado ao estudante{' '}
              {certificate?.student.name}, que fez o curso{' '}
              {certificate?.student.course} no periodo de{' '}
              {certificate?.student.period}
            </Text>
            <Text>ID: {certificate?.id}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
