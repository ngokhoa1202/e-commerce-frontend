'use client';

import React, { useEffect, useState } from 'react';
// import { CourseInfoDto } from '@/dto/course';
import { OrderDto } from '@/dto/order';
import OrderApi from '@/api/order';
import { authStore, orderStore } from '@/stores';
import { OrderStatus } from '@/constants';
import OrderList from './_components/OrderList';
import CartTotal from './_components/CartTotal';
import CourseFeeApi from '@/api/courseFee';

const sampleOrders: OrderDto[] = [
  {
  // studentId: string
  // courseId: string
  // courseFeeId: string
  // status: OrderStatus
  // totalAmount: number
  // // student?: User
  // course?: CourseInfoDto
  // courseFee?: CourseFee
  // payment?: Payment
    id: '1',
    courseId: '1',
    studentId: '1',
    status: OrderStatus.pending,
    courseFeeId: '1',
    totalAmount: 2000,
    course: {
      id: '1',
      name: 'JS',
      duration: '4 weeks',
    },
    courseFee: {
      id: '1',
      feeAmount: 2000,
    },
  },
];

for (let i = 2; i <= 5; i += 1) {
  const id = `${i}`;
  const temp = JSON.parse(JSON.stringify(sampleOrders[0]));
  temp.id = id;
  temp.courseId = id;
  temp.courseFeeId = id;
  temp.course.id = id;
  temp.courseFee.id = id;
  sampleOrders.push(temp);
}

export default function Page() {
  const { setOrders, setCourseFees, setCourseFee } = orderStore.getState();
  const { accessToken } = authStore.getState();

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, [accessToken, setOrders, setCourseFees, setCourseFee]);

  return (
    <main className="container mx-auto px-8">
      <h1 className="font-bold text-4xl text-center mt-12">Cart</h1>
      <div className="grid grid-cols-4 gap-8 mt-10">
        <OrderList />
        <CartTotal />
      </div>
    </main>
  );
}
