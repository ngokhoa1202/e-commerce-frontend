import { OrderStatus } from '@/constants';
// import { CourseInfoDto } from './course';

export interface CreateOrderDto {
  courseId: string
  courseFeeId: string
  status: OrderStatus
  totalAmount: string | number
}

export interface OrderDto {
  id: string
  studentId: string
  courseId: string
  courseFeeId: string
  status: OrderStatus
  totalAmount: number
  // student?: User
  // course?: CourseInfoDto
  course?: {
    id: string
    name: string
    duration: string
  }
  // courseFee?: CourseFee
  courseFee?: {
    id: string,
    feeAmount: number,
  }
  fee?: number
  // payment?: Payment
  // createdAt: Date
  // updatedAt: Date
}
