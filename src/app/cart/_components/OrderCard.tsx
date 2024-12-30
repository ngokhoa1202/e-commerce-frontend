'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { OrderDto } from '@/dto/order';
import { StarIcon } from '@heroicons/react/24/solid';
import CourseApi from '@/api/course';
import CourseFeeApi from '@/api/courseFee';
import { authStore, orderStore } from '@/stores';
import OrderApi from '@/api/order';
import { useRouter } from 'next/navigation';

interface ClassImage {
  src: string;
  alt: string;
}

export default function OrderCard({ order }: { order: OrderDto }) {
  const {
    id, courseFeeId, courseId,
  } = order;

  // const [isFetching, setIsFetching] = useState(true);
  const [course, setCourse] = useState(() => ({
    name: '',
    duration: '',
  }));
  const [amount, setAmount] = useState(0);
  const [fetchCount, setFetchCount] = useState(0);
  const router = useRouter();

  const { setCourseFee, setOrders, setCourseFees } = orderStore.getState();
  const { accessToken } = authStore.getState();

  useEffect(() => {
    async function helper() {
      const courseFee = await CourseFeeApi.getById(courseFeeId);
      const fee = parseInt(courseFee.feeAmount, 10);
      setAmount(fee);
      const fetchedCourse = await CourseApi.getById(courseId);
      setCourse(fetchedCourse);
      setCourseFee(courseId, fee);
    }
    helper();
  }, [fetchCount]);

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
          onClick={async () => {
            await OrderApi.remove(accessToken, id);
            setCourseFees({});
            const fetchedOrders = await OrderApi.getByUser(accessToken) || [];
            await Promise.all(fetchedOrders.map(async (order) => {
              const courseFee = await CourseFeeApi.getById(order.courseFeeId);
              const fee = parseInt(courseFee.feeAmount, 10);
              order.fee = fee;
              setCourseFee(order.courseId, fee);
            }));
            setOrders([
              // ...sampleOrders,
              ...(fetchedOrders || []),
            ]);
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
