import {
  AcademicCapIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <section className="mt-40 w-4/5 mx-auto border-t-gray-300">
      <ul className="flex flex-row w-full gap-8">
        <li>
          <div className="flex flex-col gap-4">
            <AcademicCapIcon className="text-blue-800 bg-blue-200 w-12 h-12 p-2 rounded-full" />
            <h4 className="text-zinc-800 font-bold text-2xl">Competent tutors</h4>
            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse. Obcaecati beatae maiores officia in minus quo
            </p>
          </div>
        </li>

        <li>
          <div className="flex flex-col gap-4">
            <HeartIcon className="text-blue-800 bg-blue-200 w-12 h-12 p-2 rounded-full" />
            <h4 className="text-zinc-800 font-bold text-2xl">Dedicated care</h4>
            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse. Obcaecati beatae maiores officia in minus quo
            </p>
          </div>
        </li>

        <li>
          <div className="flex flex-col gap-4">
            <ChatBubbleOvalLeftIcon className="text-blue-800 bg-blue-200 w-12 h-12 p-2 rounded-full" />
            <h4 className="text-zinc-800 font-bold text-2xl">Fluency & Conversation</h4>
            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse. Obcaecati beatae maiores officia in minus quo
            </p>
          </div>
        </li>

        <li>
          <div className="flex flex-col gap-4">
            <ChartPieIcon className="text-blue-800 bg-blue-200 w-12 h-12 p-2 rounded-full" />
            <h4 className="text-zinc-800 font-bold text-2xl">Modern appproach</h4>
            <p className="font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, esse. Obcaecati beatae maiores officia in minus quo
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
