'use client';

import { UserRole } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

type Portrait = {
  src: string;
  alt: string;
}

const parentPortraits: Array<Portrait> = [
  {
    src: '/parents/parent-1.jpg',
    alt: 'A parent\'s portrait photo',
  },
  {
    src: '/parents/parent-2.jpg',
    alt: 'A parent\'s portrait photo',
  },
  {
    src: '/parents/parent-3.jpg',
    alt: 'A parent\'s portrait photo',
  },
  {
    src: '/parents/parent-4.jpg',
    alt: 'A parent\'s portrait photo',
  },
  {
    src: '/parents/parent-5.jpg',
    alt: 'A parent\'s portrait photo',
  },
  {
    src: '/parents/parent-6.jpg',
    alt: 'A parent\'s portrait photo',
  },
];

const tutorPotraits: Array<Portrait> = [
  {
    src: '/tutors/tutor-1.jpg',
    alt: 'A tutor\'s portrait photo',
  },
  {
    src: '/tutors/tutor-2.png',
    alt: 'A tutor\'s portrait photo',
  },
  {
    src: '/tutors/tutor-3.jpg',
    alt: 'A tutor\'s portrait photo',
  },
  {
    src: '/tutors/tutor-4.jpg',
    alt: 'A tutor\'s portrait photo',
  },
  {
    src: '/tutors/tutor-5.jpg',
    alt: 'A tutor\'s portrait photo',
  },
  {
    src: '/tutors/tutor-6.jpg',
    alt: 'A tutor\'s portrait photo',
  },
];

export default function HeroSection(
  { props }: {
    props: {
      currentUserRole: UserRole
    }
  },
) {
  const title: ReactElement = (props.currentUserRole === UserRole.Student)
    ? (
      <div>
        <span className="brand-name text-blue-800 drop-shadow-sm">Invest</span>
        {' '}
        in your promising future
      </div>
    )
    : (
      <div>
        <span className="brand-name text-blue-800 drop-shadow-sm">Fulfill</span>
        {' '}
        your educational mission
      </div>
    );

  const facilitySlogan: ReactElement = (props.currentUserRole === UserRole.Tutor)
    ? (
      <div>
        With our
        {' '}
        <span className="text-blue-700 drop-shadow">high-quality infrastructure &amp; LMS</span>
        {' '}
        tutoring classes
      </div>
    )
    : (
      <div>
        With our
        {' '}
        <span className="text-blue-700 drop-shadow">high-quality English-spoken</span>
      </div>
    );

  const potraits: Array<ReactElement> = (props.currentUserRole === UserRole.Student)
    ? (
      parentPortraits.map((portrait, idx) => (
        <li key={idx} className="h-full -mr-2">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            loading="lazy"
            width={48}
            height={48}
            className="rounded-[50%] border-2 border-blue-400 object-scale-down"
          />
        </li>
      ))
    )
    : (
      tutorPotraits.map((portrait, idx) => (
        <li key={idx} className="h-full -mr-2">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            loading="lazy"
            width={48}
            height={48}
            className="rounded-[50%] border-2 border-blue-400 object-cover"
          />
        </li>
      ))
    );

  const customerFigure = (props.currentUserRole === UserRole.Parent)
    ? (
      <p className="text-center mt-2">
        <span className="text-blue-800 font-semibold text-xl">10 000</span>
        {' '}
        parents registration last year
      </p>
    )
    : (
      <p className="text-center mt-2">
        <span className="text-blue-800 font-semibold text-xl">300</span>
        {' '}
        tutors join us last year
      </p>
    );

  return (
    <section className="px-6 pt-14 lg:px-8 bg-blue-50">

      <div className="mx-auto max-w-2xl">

        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900">
            {title}
          </h1>
          <h2 className="mt-10 text-pretty text-3xl font-medium tracking-normal text-gray-800">
            {facilitySlogan}
          </h2>

          <p className="mt-8 text-pretty">Learn from the competent certified tutoring staffs</p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/classes"
              className="bg-blue-600 text-gray-200 px-5 py-2 rounded-md font-bold shadow-lg
                hover:bg-blue-800 active:bg-blue-800 hover:text-gray-100 active:text-gray-100 hover:shadow-xl 
                active:shadow-xl focus:shadow-xl focus:outline-offset-8 focus:outline-blue-600"
            >
              Explore classes
            </Link>

            <Link
              href="/pricing"
              className="text-gray-700 px-4 py-2 rounded-md font-normal hover:underline active:underline focus:underline hover:underline-offset-4 
                active:underline-offset-8 focus:outline-offset-4 hover:text-gray-900 active:text-gray-900 focus:outline-blue-600"
            >
              View pricing
              {' '}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <ul className="flex flex-row gap-0 h-12 mx-auto justify-center mt-10">
        {potraits}
      </ul>

      {customerFigure}

      <div className="w-full h-[36rem] relative mt-16 mb-32 p-10">
        <Image
          src="/hero.jpg"
          alt="A tutor instructs her student to solve a math problem"
          loading="lazy"
          quality={100}
          fill
          className="rounded-2xl shadow-2xl object-cover"
        />
      </div>

    </section>
  );
}
