import ClassCard from './ClassCard';

interface Class {
  id: string;
  title: string;
  description: string;
  classLink: string;
  curriculum: {
    week: number;
    description: string;
  }[];
}

interface ClassListProps {
  classes: Class[]; // Mảng các lớp học
}

function ClassList({ classes }: ClassListProps) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-16 col-span-10 overflow-hidden">
      {classes.map((Class) => (
        <ClassCard
          key={Class.id}
          id={Class.id}
          title={Class.title}
          description={Class.description}
          curriculum={Class.curriculum}
        />
      ))}
    </div>
  );
}

export default ClassList;
