import pb from '@/database';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const result = await pb.collection('transactions').getList(1, 50);
  return NextResponse.json(result);
};
