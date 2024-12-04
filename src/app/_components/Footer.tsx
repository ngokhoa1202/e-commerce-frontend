/* eslint-disable jsx-a11y/anchor-is-valid */

import Image from "next/image";
// import { IonIcon } from "@ionic/react";
// import { logoYoutube } from 'ionicons/icons';

type Backlink = {
  src: string;
  alt: string;
  href: string;
}

const backlinks: Array<Backlink> = [
  {
    src: "/backlinks/facebook.svg",
    alt: "Meta social media backlink",
    href: "https://www.facebook.com/",
  },
  {
    src: "/backlinks/youtube.svg",
    alt: "Youtube social media backlink",
    href: "https://www.youtube.com/",
  },
  {
    src: "/backlinks/linkedin.svg",
    alt: "Linkedin social media backlink",
    href: "https://www.linkedin.com/",
  },
  {
    src: "/backlinks/tiktok.svg",
    alt: "Tiktok social media backlink",
    href: "https://www.tiktok.com/",
  },
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-5 gap-x-16 w-full mx-auto mt-40 mb-12 bg-blue-50 px-8 py-8">
      <div className="flex flex-col gap-8 w-11/12">
        <a href="#" className="flex flex-col items-center">
          <Image
            src="/Logo.png"
            alt="Our company brand logo"
            width={48}
            height={48}
          />
          <span className="brand-name text-xl">ZetStudy</span>
        </a>

        <ul className="flex flex-row justify-around">
          {
            backlinks.map((backlink, idx) => (
              <li key={idx} className="h-6">
                <a href={backlink.href} className="block hover:-translate-y-1 duration-200">
                  <Image
                    src={backlink.src}
                    alt={backlink.alt}
                    loading="lazy"
                    width={24}
                    color="blue"
                    height={24}
                    className="block w-8 h-8 focus:outline-1 focus:outline-offset-4 focus:outline-blue-400"
                  />
                </a>
              </li>
            ))
          }
        </ul>

        <p className="text-sm text-center">&copy; ZetStudy 2024. All rights reserved.</p>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-semibold">Contact us</h3>
        <p className="text-wrap font-normal">
          <span className="font-medium">Address:&nbsp;</span>
          240 Nguyen Chi Thanh, District 5, Ho Chi Minh City, Vietnam
        </p>
        <p className="text-wrap font-normal">
          <span className="font-medium">Email:&nbsp;</span>
          <a href="mailto:tutoring-service@zetstudy.com" className="text-blue-500 hover:text-blue-700 active:text-blue-800">
            customer@zetstudy.com
          </a>
        </p>
        <p className="text-wrap font-normal">
          <span className="font-medium">Phone:&nbsp;</span>
          <a href="tel:+84943256971" className="text-blue-500 hover:text-blue-700 active:text-blue-800">
            +84 9432 56971
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-semibold">Home</h3>
        <ul className="flex flex-col gap-5">
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Our classes
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Pricing
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Our tutors
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Log in / Sign up
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-semibold">About us</h3>
        <ul className="flex flex-col gap-5">
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Company
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Achievements
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Our goals
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Partners
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Careers
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-semibold">Customer service</h3>
        <ul className="flex flex-col gap-5">
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Help center
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Privacy & terms
            </a>
          </li>

          <li>
            <a href="#" className="text-gray-800 hover:text-blue-900 active:text-blue-900">
              Account
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
