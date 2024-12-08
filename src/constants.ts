import { ReactElement } from 'react';

export const ROLES: Array<string> = ['TUTOR', 'STUDENT'];
export const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

export enum UserRole {
  Tutor = 'TUTOR',
  Student = 'STUDENT'
}

export enum OrderStatus {
  pending = 'Pending',
  completed = 'Completed',
  cancelled = 'Cancelled',
  processing = 'Processing',
}

export type Achievement = {
  title: ReactElement;
  description: string;
  icon: string;
}
