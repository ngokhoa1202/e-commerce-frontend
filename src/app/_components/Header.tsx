'use client';

import { authStore } from '@/stores/auth';
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Profile', href: '/profile'},
  { name: 'Classes', href: '/classes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About us', href: '/about-us' },
];

export default function Header() {
  const { isAuthed, setAccessToken } = authStore.getState();
  const router = useRouter();

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

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
          <Link
            href="/cart"
            className="px-3 py-2 text-black hover:shadow-lg hover:bg-blue-600 hover:text-white rounded-lg"
          >
            <ShoppingCartIcon width={24} height={24} className="inline-block" />
          </Link>

          <button
            type="button"
            onClick={() => (isAuthed ? logout() : login())}
            className="block text-lg font-semibold px-5 py-2 rounded-lg bg-blue-600 text-white hover:shadow-lg hover:bg-blue-800"
          >
            {
              isAuthed
                ? (
                  <div>
                    <span className="inline-block mr-3">Logout</span>
                    <ArrowRightStartOnRectangleIcon width={24} height={24} className="inline-block" />
                  </div>
                ) : (
                  <div>
                    <span className="inline-block mr-3">Login</span>
                    <ArrowRightEndOnRectangleIcon width={24} height={24} className="inline-block" />
                  </div>
                )
            }
          </button>
        </div>
      </nav>

    </header>
  );
}
