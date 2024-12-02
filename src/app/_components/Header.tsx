"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Classes', href: '/classes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About us', href: '/about' },
]

export default function Header(): JSX.Element {
  return (
    <header>
      <nav aria-label="Global" className="flex items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-5">
            <span className="sr-only"></span>
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
            <Link key={item.name} href={item.href} 
              className="text-lg font-semibold text-gray-700 px-5 py-2 rounded-md
              hover:bg-blue-600 hover:text-gray-200 active:bg-blue-700 active:text-gray-100
              hover:active:shadow-lg focus:drop-shadow-lg focus:outline-blue-700 focus:outline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" 
            className="text-lg font-semibold px-8 py-2 rounded-lg
            bg-blue-600 text-gray-200 hover:text-gray-100
            hover:shadow-lg hover:bg-blue-800 active:bg-blue-800 focus:drop-shadow-lg focus:outline-blue-700 focus:outline-offset-4"
          >
            Login
          </a>
        </div>
      </nav>

    </header>
  )
}
