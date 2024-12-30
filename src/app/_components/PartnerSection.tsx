import Image from "next/image";

type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
}

const partnerLogos: Array<PartnerLogo> = [
  {
    src: "/partners/duolingo.webp",
    alt: "Duolingo brand logo",
    width: 80,
  },
  {
    src: "/partners/elsa.png",
    alt: "Elsa speaking app brand logo",
    width: 200
  },
  {
    src: "/partners/british-council.png",
    alt: "British council brand logo",
    width: 270
  },
  {
    src: "/partners/promova.png",
    alt: "Promova brand logo",
    width: 120
  }
]

export default function PartnerSection(): JSX.Element {
  
  return (
    <section className="mx-auto mt-20">
      <h2 className="text-3xl text-center">Our partners</h2>
      <ul className="flex flex-row justify-around flex-shrink-0 w-full h-16 mt-10">
        {
          partnerLogos.map((logo, idx) => {
            return (
              <li className="relative block m-w-16" key={idx}>
                <Image
                  src={logo.src} 
                  width={logo.width}
                  height={80}
                  alt={logo.alt}
                  className="opacity-50 brightness-75"
                />
              </li>
            )
          })
        }
      </ul>
    </section>
   
  )
}

