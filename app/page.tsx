import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <>
        <h1 className='text-4xl font-bold'>
          <span>Hello, </span>
          <Image
            src='/icons/next.svg'
            alt='Vercel Logo'
            className='inline-block'
            width={100}
            height={24}
            priority
          />
        </h1>
      </>
    </main>
  );
}
