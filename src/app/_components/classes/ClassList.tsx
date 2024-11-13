import ClassCard from './ClassCard';

function ClassList({ classes }) {
  return (
    <div className="space-y-4">
      {classes.map((Class, index) => (
        <ClassCard
          key={index}
          title={Class.title}
          description={Class.description}
          classLink={Class.ClassLink}
          curriculum={Class.curriculum}
        />
      ))}
    </div>
  );
}

export default ClassList;
