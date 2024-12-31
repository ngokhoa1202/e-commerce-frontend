import { CourseFullDto } from '@/dto/course';
import ClassCard from './ClassCard';


function ClassList({ courses }: { courses: CourseFullDto[]}) {
  return (
    <div className="mt-12 grid grid-cols-3 gap-x-12 gap-y-20 col-span-10 overflow-x-hidden overflow-y-visible">
      {courses.map((course) => (
        <ClassCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default ClassList;
