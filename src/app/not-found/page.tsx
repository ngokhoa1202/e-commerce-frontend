import Link from 'next/link';
import { ReactElement } from 'react';


export default function NotFoundPage(): ReactElement {
  return (
    <section className="container px-8">
      <h1 className="font-bold text-4xl text-center mt-12">404</h1>
      <h2 className="font-semibold text-2xl text-center mt-6">Something is missing</h2>
      <p className="font-normal text-xl text-center mt-4">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Link
        href="/"
        className="font-normal text-base text-center mt-2 text-blue-600 hover:text-blue-800
          hover:underline hover:underline-offset-4 block align-middle"
      >
        &larr; Back to home
      </Link>
    </section>
  );
}
