/* eslint-disable import/no-cycle */
import { UUID } from 'crypto';
import { CourseFeePlainDto } from './courseFee'

export interface CreateCourseDto {
  name: string
  subject: string
  duration: string
  description: string
  locationId: string
}

export interface CourseInfoDto {
  id: string
  name: string
  subject: string
  duration: string
  description: string

  curriculum: {
    week: number,
    description?: string,
    title: string,
    lessons: { title: string, etc: string }[],
  }[]

  fees: Array<CourseFeePlainDto>;
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

