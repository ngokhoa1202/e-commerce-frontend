'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { orderStore } from '@/stores/cart';
import { OrderDto } from '@/dto/order';
import { StarIcon } from '@heroicons/react/24/solid';

export default function CartTotal() {
  const [total, setTotal] = useState(0);
  const { courseFees, orders } = orderStore.getState();

  useEffect(() => {
    setTotal(Object.values(orders).reduce((res, { fee }) => res + (fee || 0), 0));
  }, [orders]);

  return (
    <div className="overflow-hidden bg-transparent flex flex-col gap-2 max-w-[300px]">
      <p className="text-gray-600 text-lg font-semibold">Total:</p>
      <p className="text-4xl text-black font-bold">
        $
        {total}
      </p>
      <button type="button" className="bg-blue-600 text-white py-2 text-lg">Checkout</button>
    </div>
  );
}
