import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { OrderDto } from '@/dto/order';

export type CartState = {
  orders: OrderDto[]
}

export type CartActions = {
  setOrders: (orders: OrderDto[]) => void
}

export type CartStore = CartState & CartActions

export const initialState: CartState = {
  orders: [],
};

export const orderStore = createStore<CartStore>()(
  persist(
    (set) => ({
      ...initialState,
      setOrders: (orders: OrderDto[]) => set({ orders }),
    }),
    { name: 'order-storage' },
  ),
);
