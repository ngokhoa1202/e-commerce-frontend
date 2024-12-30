import { CourseFullDto, CoursePlainDto } from '@/dto/course';
import MyClassCard from './MyClassCard';
import { ReactElement } from 'react';



export default function MyClassList({ courses }: { courses: CoursePlainDto[]}): ReactElement {
  return (
    <div className="w-full mt-12 grid grid-cols-3 gap-x-12 gap-y-20 overflow-x-hidden overflow-y-visible">
      {courses.map((course) => (
        <MyClassCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

