import Image from "next/image"

type Potrait = {
  src: string;
  alt: string;
}

const parentPotraits: Array<Potrait> = [
  {
    src: "/parents/parent-1.jpg",
    alt: "A parent's potrait photo"
  },
  {
    src: "/parents/parent-2.jpg",
    alt: "A parent's potrait photo"
  },
  {
    src: "/parents/parent-3.jpg",
    alt: "A parent's potrait photo"
  },
  {
    src: "/parents/parent-4.jpg",
    alt: "A parent's potrait photo"
  },
  {
    src: "/parents/parent-5.jpg",
    alt: "A parent's potrait photo"
  },
  {
    src: "/parents/parent-6.jpg",
    alt: "A parent's potrait photo"
  }
]

export default function PotraitSection(): JSX.Element {

  return (
    <div>
      <ul className="flex flex-row gap-0 h-12 mx-auto justify-center">
        {
          parentPotraits.map((potrait, idx) => {
            return (
              <li key={idx} className="h-full -mr-2">
                <Image
                  src={potrait.src}
                  alt={potrait.alt}
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
    </div>
    
  )
}
