'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { orderStore } from '@/stores/cart';
import { OrderDto } from '@/dto/order';
import { StarIcon } from '@heroicons/react/24/solid';
import { authStore } from '@/stores';
import { useRouter } from 'next/navigation';

export default function CartTotal() {
  const [total, setTotal] = useState(0);
  const { courseFees, orders } = orderStore.getState();
  const { accessToken } = authStore.getState();
  const router = useRouter();

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
      <button
        type="button"
        className="bg-blue-600 text-white py-2 text-lg rounded"
        onClick={async () => {
          const orderId = orders[0].id;
          const url = 'http://localhost:3031/';
          const response = await fetch('https://tienclay.me/ecommerce/payments/create', {
            method: 'POST',
            headers: {
              Authorization: accessToken,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderId, returnUrl: url, cancelUrl: url }),
          });
          const { data } = await response.json();
          if (data && data.checkoutUrl) router.push(data.checkoutUrl);
        }}
      >
        Checkout
      </button>
    </div>
  );
}
