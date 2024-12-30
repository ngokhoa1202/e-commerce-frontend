/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { SyntheticEvent } from 'react';
import Link from 'next/link';
import { CourseFullDto, CourseInfoDto } from '@/dto/course';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import { UUID } from 'crypto';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface ClassImage {
  src: string;
  alt: string;
}

export default function ClassCard({ course }: { course: CourseFullDto }) {
  const {
    id, name, description, subject, duration, fees, startDate, endDate
  } = course;

  const fee = fees.length ? fees[0].feeAmount : 0;

  const classImage: ClassImage = {
    src: '/classes/class-1.webp',
    alt: 'Our class\' facility',
  };

  const router: AppRouterInstance = useRouter();

  function onClickClassCard(e: SyntheticEvent<HTMLDivElement>, courseId: UUID) {
    router.push(`classes/${id}`);
  }

  return (
    <div className="rounded-2xl w-full mx-auto p-0 hover:cursor-pointer transition-all duration-500
      ease-in transform-gpu hover:-translate-y-4 bg-blue-100 pb-4 overflow-y-hidden"
      onClick={(e) => onClickClassCard(e, id)}
      role="button"
      tabIndex={0}
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

      <h2 className="text-xl font-bold text-gray-800 mt-4 mx-4">{name}</h2>

      {/* Body */}
      <div className="min-h-16 mx-4">
        {/* Course Class Images */}

        {/* Chips Row */}
        <div className="flex justify-between items-center mt-4">
          {/* Left Chips */}
          <div className="flex space-x-4">
            <div className="bg-zinc-300 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              {duration}
            </div>
            <div className="bg-zinc-300 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              {subject}
            </div>
          </div>

          {/* Right Chip */}
          <div className="bg-zinc-300 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
            By Author
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          {/* Left Chips */}
          <div className="flex space-x-4">
            <div className="bg-zinc-300 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              Start:&nbsp;
              {(startDate) ? startDate.toString() : Date.now().toString()}
            </div>
            
          </div>

          {/* Right Chip */}
          <div className="bg-zinc-300 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
            End:&nbsp;
            {(endDate) ? endDate.toString() : Date.now().toString()}
          </div>
        </div>

        <div className="flex justify-between items-center gap-8 mt-8 mb-8 ">
          <div className="flex space-x-4">
            <div className="px-4 py-2 bg-zinc-500 text-gray-100 text-normal rounded-md flex items-center">
              $
              {fee}
            </div>

            <div className="px-4 py-2 bg-blue-600 text-gray-100 text-normal font-bold rounded-md flex items-center gap-2">
              <StarIcon
                color="#FDE047"
                width={24}
                height={24}
              />
              4.7
            </div>

            <div className="px-4 py-2 bg-zinc-500 text-gray-100 text-normal rounded-md flex items-center gap-2">
              20 slots
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
