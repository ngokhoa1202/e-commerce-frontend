import Image from 'next/image';

interface TestimonialImage {
  src: string;
  alt: string;
}

interface CustomerFeedback extends TestimonialImage {
  content: string;
  author: string;
}

const customerFeedbacks: Array<CustomerFeedback> = [
  {
    src: '/testimonial/customer/ben.jpg',
    alt: 'A parent\'s feedback about our tutoring service',
    content: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    author: 'Tran Tuan Kiet',
  },
  {
    src: '/testimonial/customer/dave.jpg',
    alt: 'A parent\'s feedback about our tutoring service',
    content: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    author: 'Le Binh Long',
  },
  {
    src: '/testimonial/customer/hannah.jpg',
    alt: 'A parent\'s feedback about our tutoring service',
    content: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    author: 'Nguyen Le Tuyet Van',
  },
  {
    src: '/testimonial/customer/steve.jpg',
    alt: 'A parent\'s feedback about our tutoring service',
    content: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    author: 'Ngo Van Kiet',
  },
];

const teachingImages: Array<TestimonialImage> = [
  {
    src: '/testimonial/gallery/testimonial-1.jpeg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-2.webp',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-3.jpeg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-4.jpg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-5.jpg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-6.jpeg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-7.jpg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-8.jpg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-9.jpeg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-10.png',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-11.webp',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
  {
    src: '/testimonial/gallery/testimonial-12.jpg',
    alt: 'A tutor is instructing students how to pronounce correctly',
  },
];

export default function TestimonialSection(): JSX.Element {
  return (
    <section className="grid grid-cols-2 mt-60 py-10 bg-blue-100">
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 px-8 py-40">

        {
          customerFeedbacks.map(
            (feedback, idx) => (
              <figure key={idx}>
                <Image
                  src={feedback.src}
                  alt={feedback.alt}
                  width={56}
                  height={56}
                  className="rounded-[50%]"
                />
                <blockquote className="font-normal mt-6">{feedback.content}</blockquote>
                <p className="font-serif mt-3 font-light text-sm">
                  &mdash;
                  {feedback.author}
                </p>
              </figure>
            ),
          )
        }
      </div>

      <div className="grid grid-cols-3 gap-x-4 gap-y-3 px-8">
        {
          teachingImages.map((image, idx) => (
            <figure key={idx} className="hover:overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="object-cover w-full h-52 rounded-xl hover:scale-x-110 hover:scale-y-110 duration-500 hover:shadow-blue-800 hover:shadow-lg hover:-translate-y-4"
              />
            </figure>
          ))
        }
      </div>
    </section>
  );
}
