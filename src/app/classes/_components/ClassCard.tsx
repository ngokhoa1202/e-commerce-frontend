'use client';

import React from 'react';
import Link from 'next/link';
import { CourseInfoDto } from '@/dto/course';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface ClassImage {
  src: string;
  alt: string;
}

export default function ClassCard({ course }: { course: CourseInfoDto }) {
  const {
    id, name, description, curriculum, duration, fees,
  } = course;
  const fee = fees.length ? fees[0].feeAmount : 0;

  const classImage: ClassImage = {
    src: '/classes/class-1.webp',
    alt: 'Our class\' facility',
  };

  return (
    <div className="rounded-2xl overflow-hidden w-full mx-auto p-0 hover:cursor-pointer transition-all duration-500
      ease-in transform-gpu hover:-translate-y-4"
    >
      {/* Header */}
      <div className="overflow-hidden">
        <Image
          src={classImage.src}
          alt={classImage.alt}
          width={200}
          height={120}
          className="object-cover w-full h-auto rounded-xlc hover:scale-110 duration-150"
        />
      </div>

      <h2 className="text-xl font-bold text-gray-800 mt-4">{name}</h2>

      {/* Body */}
      <div className="min-h-16">
        {/* Course Class Images */}

        {/* Chips Row */}
        <div className="flex justify-between items-center mt-4">
          {/* Left Chips */}
          <div className="flex space-x-4">
            <div className="bg-zinc-200 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              {duration}
            </div>
            <div className="bg-zinc-200 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              Beginner
            </div>
          </div>

          {/* Right Chip */}
          <div className="bg-zinc-200 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
            By Author
          </div>
        </div>

        <div className="flex justify-between items-center gap-8 mt-8 mb-8 ">
          <div className="flex space-x-4">
            <div className="px-4 py-2 bg-zinc-500 text-gray-100 text-lg rounded-md flex items-center">
              $
              {fee.toFixed(2)}
            </div>

            <div className="px-4 py-2 bg-zinc-500 text-gray-100 text-lg rounded-md flex items-center gap-2">
              <StarIcon
                color="#FDE047"
                width={24}
                height={24}
              />
              4.7
            </div>
          </div>

          <div className="px-4 py-2 bg-zinc-500 text-gray-100 text-lg rounded-md flex items-center">
            20 slots left
          </div>
        </div>
      </div>
    </div>
  );
}
