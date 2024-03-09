import pb from '@/database';
import Papa from 'papaparse';

export const POST = async ({ file }: { file: File }) => {
  const parsedFile = Papa.parse(file, {});
  console.log(parsedFile);
};
