import { CourseFullDto, CourseInfoDto } from '@/dto/course';
import ClassCard from './ClassCard';

function ClassList({ classes }: { classes: CourseFullDto[] }) {
  return (
    <div className="mt-12 grid grid-cols-3 gap-x-12 gap-y-20 col-span-10 overflow-x-hidden overflow-y-visible">
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
