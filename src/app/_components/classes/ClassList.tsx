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
    <div className="space-y-4 mt-8 flex flex-col gap-12">
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
