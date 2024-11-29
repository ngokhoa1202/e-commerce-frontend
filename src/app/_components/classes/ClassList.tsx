import ClassCard from './ClassCard';

interface Class {
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
    <div className="space-y-4">
      {classes.map((Class, index) => (
        <ClassCard
          key={index}
          title={Class.title}
          description={Class.description}
          classLink={Class.classLink}
          curriculum={Class.curriculum}
        />
      ))}
    </div>
  );
}

export default ClassList;
