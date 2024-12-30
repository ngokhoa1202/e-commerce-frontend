import { orderStore } from '@/stores/cart';
import { useEffect, useState } from 'react';
import OrderCard from './OrderCard';

export default function OrderList() {
  const { orders } = orderStore.getState();
  const [countText, setCountText] = useState('0 courses in cart');

  useEffect(() => {
    if (orders.length === 1) setCountText('1 course in cart');
    else setCountText(`${orders.length} courses in cart`);
  }, [orders]);

  return (
    <div className="col-span-3 pr-12 overflow-hidden">
      <div className="text-lg text-black">
        {countText}
      </div>
      <div className="mt-2 flex flex-col">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
          />
        ))}
      </div>
    </div>
  );
}
