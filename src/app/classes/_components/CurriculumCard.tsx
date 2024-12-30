import {RocketLaunchIcon } from '@heroicons/react/24/solid';
import { WeeklyPlan } from '@/dto/weeklyPlan';


export default function CurriculumCard({ curriculum }: { curriculum: WeeklyPlan }) {
  const {id, weekNumber, topic, description, createdAt, updatedAt } = curriculum;
  const lessons = [1, 2, 3].map(() => (
    <div
      key={id}
      className="group border border-blue-300 rounded-lg p-4 items-center hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500"
    >
      
      <div className="flex items-center gap-4 bg-100 px-2 py-2 rounded">
        <RocketLaunchIcon aria-hidden className="h-6 w-6 hover:text-yellow-100" color="#3B82F6" />
        <p className="text-normal text-nowrap text-ellipsis overflow-hidden">{description}</p>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col gap-8 bg-white border rounded-lg p-8 hover:-translate-y-8 transition-all duration-500 hover:ease-in
      hover:shadow-2xl hover:shadow-blue-500">
      <p className="text-6xl text-right">{weekNumber}</p>
      <h2 className="font-bold text-2xl">{topic}</h2>
      <div className="flex flex-col gap-8">
        {lessons}
      </div>
    </div>
  );
}
