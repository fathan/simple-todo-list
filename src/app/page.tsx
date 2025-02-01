import Link from 'next/link';

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Simple TODO App
        </h1>
        <p className="text-lg text-center sm:text-left">
          Simple todo App list with Next.js & TypeScript
        </p>

        <Link href="/todo">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
            Open Todo App
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
