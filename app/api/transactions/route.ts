import { NextResponse } from 'next/server';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const GET = async () => {
  const result = await pb.collection('transactions').getList(1, 50);
  return NextResponse.json(result);
};
