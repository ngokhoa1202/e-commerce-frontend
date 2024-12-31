/* eslint-disable import/no-cycle */
import { UUID } from 'crypto';
import { CourseFeePlainDto } from './courseFee'

export interface CourseCreationDto {
  name: string;
  subject: string;
  duration: string;
  description: string;
  locationId: UUID;
  startDate: Date;
  endDate: Date;
}


export interface CoursePlainDto {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  subject: string;
  duration: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

export interface CourseFullDto extends CoursePlainDto {
  fees: Array<CourseFeePlainDto>;
}

