'use client';

import React from 'react';
import Image from 'next/image';
import { OrderDto } from '@/dto/order';
import { StarIcon } from '@heroicons/react/24/solid';

interface ClassImage {
  src: string;
  alt: string;
}

export default function OrderCard({ order }: { order: OrderDto }) {
  const {
    id, course, courseFee,
  } = order;
  const amount = courseFee?.feeAmount || 20;

  const classImage: ClassImage = {
    src: '/classes/class-1.webp',
    alt: 'Our class\' facility',
  };

  return (
    <div className="overflow-hidden bg-transparent border-gray-300 border-t py-6 grid-cols-6 grid">
      <div className="overflow-hidden">
        <Image
          src={classImage.src}
          alt={classImage.alt}
          width={200}
          height={120}
          className="object-cover w-full"
        />
      </div>

      <div className="flex flex-col justify-start items-start px-4 col-span-4">
        <h2 className="text-xl font-bold text-gray-800">{course.name}</h2>

        <div className="py-2 flex items-center gap-2 rounded-lg">
          <StarIcon width={20} height={20} className="text-yellow-400" />
          4.7 / 5
        </div>

        <div className="flex gap-4">
          <div className="bg-gray-100 text-gray-800 text-sm font-semibold">
            {course.duration}
          </div>
          <div className="bg-gray-100 text-gray-800 text-sm font-semibold">
            Beginner
          </div>
        </div>
      </div>

      <div>
        <div className="py-2 text-blue-600 text-xl font-bold">
          $
          {amount}
        </div>
        <button
          type="button"
          className="text-blue-500 hover:text-blue-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
