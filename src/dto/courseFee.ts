import { UUID } from 'crypto';
// eslint-disable-next-line import/no-cycle
import { CoursePlainDto } from './course';

export interface CourseFeePlainDto {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  feeAmount: number;
  feeType: string;
  description: string;
}

export interface CourseFeeFullDto extends CourseFeePlainDto {
  courseId: UUID;
  course: CoursePlainDto;
}
