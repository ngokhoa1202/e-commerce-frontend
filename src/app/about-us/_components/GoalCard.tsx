import { Achievement } from '@/constants';

export default function GoalCard({ title, description, icon }: Achievement) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-4 font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
