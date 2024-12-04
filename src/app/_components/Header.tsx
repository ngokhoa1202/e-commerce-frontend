"use client";

import { authStore } from '@/stores/auth';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about" },
];

export default function Header() {
  const { accessToken, setAccessToken } = authStore.getState();
  const [isAuthed, setIsAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAuthed(!!accessToken);
  }, [accessToken]);

  function login() {
    router.push('/login');
  }

  function logout() {
    setAccessToken('');
    router.refresh();
  }

  return (
    <header>
      <nav aria-label="Global" className="flex items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-5">
            <span className="sr-only" />
            <Image
              alt="ZetStudy brand logo"
              src="/Logo.png"
              className="h-12 w-auto rounded justify-self-center hover:shadow-small"
              width={48}
              height={48}
              loading="lazy"
            />
            <span className="brand-name text-">ZetStudy</span>
          </Link>
        </div>

        <div className="lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-semibold text-gray-700 px-5 py-2 rounded-md
              hover:bg-blue-600 hover:text-gray-200 active:bg-blue-700 active:text-gray-100
              hover:active:shadow-lg focus:drop-shadow-lg focus:outline-blue-700 focus:outline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            onClick={() => (isAuthed ? logout() : login())}
            className="text-lg font-semibold p-2 rounded-lg bg-blue-600 text-white hover:shadow-lg hover:bg-blue-800"
          >
            {
              isAuthed
                ? <ArrowRightStartOnRectangleIcon width={20} height={20} />
                : <ArrowRightEndOnRectangleIcon width={20} height={20} />
            }
          </button>
        </div>
      </nav>

    </header>
  );
}
