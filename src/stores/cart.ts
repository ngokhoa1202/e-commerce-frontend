import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { OrderDto } from '@/dto/order';

export type CartState = {
  orders: OrderDto[]
  courseFees: { [courseId: string]: number }
}

export type CartActions = {
  setOrders: (orders: OrderDto[]) => void
  setCourseFee: (courseId: string, fee: number) => void
  setCourseFees: (courseFees: { [courseId: string]: number }) => void
}

export type CartStore = CartState & CartActions

export const initialState: CartState = {
  orders: [],
  courseFees: {},
};

export const orderStore = createStore<CartStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setOrders: (orders: OrderDto[]) => set({ orders }),
      setCourseFees: (courseFees: { [courseId: string]: number }) => set({ courseFees }),
      setCourseFee: (courseId: string, fee: number) => {
        const { courseFees } = get();
        courseFees[courseId] = fee;
        set({ courseFees });
      },
    }),
    { name: 'order-storage' },
  ),
);
