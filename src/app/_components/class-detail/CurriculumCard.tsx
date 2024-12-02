import { ClockIcon } from "@heroicons/react/24/outline";

interface Curriculum {
  week: number;
  title: string;
  lessons: {
    title: string,
    etc: string,
  }[];
};

export default function CurriculumCard ({ curriculum }: { curriculum: Curriculum }) {
  const { week, title, lessons } = curriculum;
  return (
    <div className="flex flex-col gap-4 bg-white border rounded-lg p-8">
      <p className="text-6xl text-right">{week}</p>
      <p className="font-bold text-2xl">{title}</p>
      <div className="flex flex-col gap-4">
        {lessons.map((lesson, idx) => (
          <div key={idx} className="flex justify-between border rounded-lg p-6 items-center hover:border-orange-300">
            <div>
              <div className="text-xl font-bold">{lesson.title}</div>
              <div className="text-lg text-gray-500">Lesson {idx + 1}</div>
            </div>
            <div className="flex h-fit bg-gray-100 px-4 py-2 rounded">
              <ClockIcon aria-hidden className="h-6 w-6"/>
              <p className="text-lg">{lesson.etc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
