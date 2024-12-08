import { CourseInfoDto } from '@/dto/course';
import ClassCard from './ClassCard';

function ClassList({ classes }: { classes: CourseInfoDto[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-16 col-span-10 overflow-hidden">
      {classes.map((course) => (
        <ClassCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default ClassList;
