'use client';

import { useEffect, useState } from 'react';
import { CourseFullDto, CourseInfoDto } from '@/dto/course';
import CourseApi from '@/api/course';
import CurriculumCard from '@/app/classes/_components/CurriculumCard';
import OrderApi from '@/api/order';
import { authStore, orderStore } from '@/stores';
import { OrderStatus } from '@/constants';
import CourseFeeApi from '@/api/courseFee';
import { WeeklyPlan } from '@/dto/weeklyPlan';
import CurriculumApi from '@/api/curriculum';

const sampleCourse: CourseFullDto = {
  id: '0375107b-b1b4-4a7f-8585-eb019f0e9bc6',
  createdAt: new Date('2024-11-28T10:28:34.944Z'),
  updatedAt: new Date('2024-11-28T10:28:34.944Z'),
  name: 'Introduction to Programming',
  subject: 'Programming',
  duration: '10 weeks',
  startDate: new Date(),
  endDate: new Date(),
  description: 'Learn the basics of programming',
  fees: [
    {
      id: '617b2d49-a490-4876-9b9b-6ca512fe3e5f',
      createdAt: new Date('2024-11-28T10:28:54.856Z'),
      updatedAt: new Date('2024-11-28T10:28:54.856Z'),
      feeAmount: 20000.00,
      feeType: 'One-time',
      description: 'One-time fee for fundamentals of programming',
    }
  ]
}

const sampleCurriculum: Array<WeeklyPlan> = [
  {
    id: 'e472cace-a2c7-49a7-8d08-b4d712009cc7',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 1,
    topic: 'Week 1: Introduction to English',
    description: 'Overview of the course objectives and introduction to the English language.'
  },
  {
    id: '5aea0fa3-52e4-4c24-95d2-2246ee4933df',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 2,
    topic: 'Week 2: Basic Greetings and Introductions',
    description: 'Learn how to greet others and introduce yourself in various settings.',
  },
  {
    id: 'acab4cbf-0a98-4ada-a161-24493502b8ec',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 3,
    topic: 'Week 3: Numbers and Dates',
    description: 'Understanding numbers, dates, and how to use them in conversations.'
  },
  {
    id: '6b358171-6948-4c4e-bf7f-a15c2a24d529',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 4,
    topic: 'Week 4: Everyday Vocabulary',
    description: 'Expand your vocabulary with everyday words and phrases.',
  },
  {
    id: '1eaa059c-e4e9-4708-8bb6-c3193487bb51',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 5,
    topic: 'Week 5: Basic Sentence Structure',
    description: 'Introduction to constructing basic sentences in English.',
  },
  {
    id: 'f42d08f1-0b58-4dae-84ea-605c32fa13e8',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 6,
    topic: 'Week 6: Present Simple Tense',
    description: 'Learn the present simple tense and its applications.',
  },
  {
    id: '3c9fb779-0f1f-4500-a54e-4fe76c746335',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 7,
    topic: 'Week 7: Asking Questions',
    description: 'Practice forming and answering questions in English.',
  },
  {
    id: 'b0982fca-2c36-4e1a-85da-f4de95b97b09',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 8,
    topic: 'Week 8: Common Verbs',
    description: 'Explore common verbs used in daily conversations.',
  },
  {
    id: 'f402d568-f3c2-478c-8b09-a895b592eae9',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 9,
    topic: 'Week 9: Describing People and Places',
    description: 'Learn how to describe people, places, and things effectively.',
  },
  {
    id: 'd64403f7-bbea-412b-80ed-fb319e911190',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 10,
    topic: 'Week 10: Introduction to Pronouns',
    description: 'Introduction to pronouns and their usage in sentences.',
  },
  {
    id: '2f3446ce-833d-4462-bdc2-11a6bdfe069a',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 11,
    topic: 'Week 11: Basic Prepositions',
    description: 'Understand basic prepositions and how to use them correctly.',
  },
  {
    id: 'bcb4c753-b043-413c-8cef-288ab139ca80',
    createdAt: new Date('2024-12-06T02:12:17.360Z'),
    updatedAt: new Date('2024-12-06T02:12:17.360Z'),
    weekNumber: 12,
    topic: 'Week 12: Review and Practice',
    description: 'Comprehensive review of all topics covered and practical exercises.',
  }
];

export default function Page({ params }: { params: Promise<{ id: string }>}) {

  const [course, setCourse] = useState<CourseFullDto>(() => sampleCourse);
  const [curriculum, setCurriculum] = useState<WeeklyPlan[]>(() => sampleCurriculum);

  const { setOrders, setCourseFees, setCourseFee } = orderStore.getState();

  const { accessToken } = authStore.getState();

  useEffect(() => {
    async function fetchCourse() {
      const { id } = (await params);
      const fetchedCourse = await CourseApi.getById(id);
      setCourse(fetchedCourse);
    }

    async function fetchCurriculum() {
      const {id} = await params;
      const fetchedCurriculum = await CurriculumApi.getByCourseId(id);
      setCurriculum(fetchedCurriculum);
    }

    fetchCourse();
  }, [params]);

  return (
    <main className="container mx-auto px-16 py-8 flex flex-col gap-8">
      <div className="grid grid-cols-12 py-4 gap-4">
        <div className="col-span-9">
          <h1 className="text-4xl font-bold col-span-4">{course.name}</h1>
          <h2 className="text-2xl font-semibold col-span-6 mt-4">{course.description}</h2>
        </div>
        
        <div className="col-span-3 mx-auto my-auto">
          <button
            type="button"
            className="px-8 py-4 text-lg bg-blue-600 text-gray-100 rounded-lg hover:bg-blue-700 hover:text-gray-50
              transition-all duration-200 active:bg-blue-700 active:text-gray-50 hover:ease-in active:ease-out" 
            onClick={async () => {
              await OrderApi.create(accessToken, {
                totalAmount: course.fees[0].feeAmount,
                courseId: course.id,
                courseFeeId: course.fees[0].id,
                status: OrderStatus.pending,
              });

              setCourseFees({});
              const fetchedOrders = await OrderApi.getByUser(accessToken) || [];
              await Promise.all(fetchedOrders.map(async (order) => {
                const courseFee = await CourseFeeApi.getById(order.courseFeeId);
                const fee = parseInt(courseFee.feeAmount, 10);
                order.fee = fee;
                setCourseFee(order.courseId, fee);
              }));
              setOrders([
                // ...sampleOrders,
                ...(fetchedOrders || []),
              ]);
            }}
          >
            Buy now
          </button>
        </div>
       
      </div>
      <hr />
      {/* <Image alt="Cover" src={coverImage} className="my-8"/> */}
      <div className="grid grid-cols-2 gap-8">
        {curriculum.map((weekPlan) => <CurriculumCard key={weekPlan.weekNumber} curriculum={weekPlan} />)}
      </div>
    </main>
  );
}
