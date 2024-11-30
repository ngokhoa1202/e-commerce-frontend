'use client';

import Image from "next/image";

type Portrait = {
  src: string;
  alt: string;
}

const parentPortraits: Array<Portrait> = [
  {
    src: "/parents/parent-1.jpg",
    alt: "A parent's portrait photo"
  },
  {
    src: "/parents/parent-2.jpg",
    alt: "A parent's portrait photo"
  },
  {
    src: "/parents/parent-3.jpg",
    alt: "A parent's portrait photo"
  },
  {
    src: "/parents/parent-4.jpg",
    alt: "A parent's portrait photo"
  },
  {
    src: "/parents/parent-5.jpg",
    alt: "A parent's portrait photo"
  },
  {
    src: "/parents/parent-6.jpg",
    alt: "A parent's portrait photo"
  }
]

export default function HeroSection(): JSX.Element {

  return (
    <section className="px-6 pt-14 lg:px-8 bg-blue-50">
    
      <div className="mx-auto max-w-2xl">
        
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900">
            <span className="brand-name text-blue-800 drop-shadow-sm">Invest</span> in your promising future
          </h1>
          <h2 className="mt-10 text-pretty text-3xl font-medium tracking-normal text-gray-800">
            With our <span className="text-blue-700 drop-shadow">high-quality English</span> tutoring classes
          </h2>
          <p className="mt-8 text-pretty">Learn from the competent certified tutoring staffs</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="bg-blue-600 text-gray-200 px-5 py-2 rounded-md font-bold shadow-lg
                hover:bg-blue-800 active:bg-blue-800 hover:text-gray-100 active:text-gray-100 hover:shadow-xl active:shadow-xl focus:shadow-xl focus:outline-offset-8 focus:outline-blue-600"
            >
              Explore classes
            </a>
            <a href="#" className="text-gray-700 px-4 py-2 rounded-md font-normal hover:underline active:underline focus:underline hover:underline-offset-4 active:underline-offset-8 focus:outline-offset-4 hover:text-gray-900 active:text-gray-900 focus:outline-blue-600">
              View pricing <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
      <ul className="flex flex-row gap-0 h-12 mx-auto justify-center mt-10">
        {
          parentPortraits.map((portrait, idx) => {
            return (
              <li key={idx} className="h-full -mr-2">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="rounded-[50%] border-2 border-blue-400"
                />
              </li>
            )
          })
        }
      </ul>

      <p className="text-center mt-2">
        <span className="text-blue-800 font-semibold text-xl">10 000</span> parents registration last year
      </p>

      <div className="w-full h-[36rem] relative mt-16 mb-32 p-10">
        <Image src="/hero.jpg"
          alt="A tutor instructs her student to solve a math problem"
          loading="lazy"
          quality={100}
          fill={true}
          className="rounded-2xl shadow-2xl object-cover"
        />
      </div>
      
    </section>
  )
}
