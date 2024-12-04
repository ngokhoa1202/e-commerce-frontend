'use client';

import React from 'react';
import Link from 'next/link';
import { CourseInfoDto } from '@/dto/course';

export default function ClassCard({ course }: { course: CourseInfoDto }) {
  const {
    id, name, description, curriculum, duration, fees,
  } = course;
  const fee = fees.length ? fees[0].feeAmount : 0;

  return (
    <div className="rounded overflow-hidden shadow-2xl bg-blue-100 w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <Link
          href={`/classes/${id}`}
          className="text-blue-500 font-semibold hover:text-blue-700 col-span-3 block self-center text-center"
        >
          View Detail
        </Link>
      </div>

      {/* Body */}
      <div className="px-4 py-8 min-h-16">
        {/* Course Class Images */}
        <div className="flex overflow-hidden">
          {/* {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Course class ${index + 1}`}
              className="w-16 h-16 rounded"
            />
          ))} */}
        </div>

        {/* Chips Row */}
        <div className="flex justify-between items-center mt-4">
          {/* Left Chips */}
          <div className="flex space-x-4">
            <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              {duration}
            </div>
            <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
              Beginner
            </div>
          </div>

          {/* Right Chip */}
          <div className="bg-gray-100 text-gray-800 text-sm font-semibold py-1 px-3 rounded-full">
            By Author
          </div>
        </div>

        <div className="p-2 text-yellow-600 text-lg">
          $
          {fee}
        </div>

        {/* Curriculum */}
        <div className="mt-4 px-4">
          <h3 className="text-lg font-semibold text-gray-800">Curriculum</h3>
          <div className="flex space-x-4 overflow-x-auto mt-2">
            {curriculum.map((item) => (
              <div
                key={item.week}
                className="flex-shrink-0 bg-gray-100 p-3 rounded-md shadow text-center w-36 max-w-sm"
              >
                <div className="text-blue-500 font-bold">
                  Week
                  {item.week}
                </div>
                <p className="text-gray-600 text-sm mt-1 overflow-hidden break-words">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
