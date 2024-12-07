'use client';

// import Image from "next/image";
// import coverImage from "../../_assets/course-cover.png"
import { useEffect, useState } from 'react';
import { CourseInfoDto } from '@/dto/course';
import CourseApi from '@/api/course';
import CurriculumCard from '@/app/_components/classes/CurriculumCard';
import OrderApi from '@/api/order';
import { authStore, orderStore } from '@/stores';
import { OrderStatus } from '@/constants';
import CourseFeeApi from '@/api/courseFee';

const sampleCourse = {
  id: 'c4a5062f-b2c3-4b6b-8b9f-140d4c840669',
  name: 'Introduction to Web Development',
  description: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
  subject: '',
  duration: '4 weeks',
  fees: [{
    id: '1', courseId: '1', feeType: 'One-time', feeAmount: 20,
  }],
  curriculum: [
    {
      week: 1,
      description: 'HTML Basics',
      title: 'HTML',
      lessons: [{ title: 'Tags', etc: '1 hour' }],
    },
    {
      week: 2,
      description: 'CSS Styling',
      title: 'CSS',
      lessons: [{ title: 'Syntax', etc: '30 mins' }, { title: 'Selectors', etc: '2 hours' }],
    },
    {
      week: 3,
      description: 'JavaScript Introduction',
      title: 'JavaScript',
      lessons: [{ title: 'DOM', etc: '1 hour' }, { title: 'Syntax', etc: '2 hours' }, { title: 'ES6', etc: '1 hour' }],
    },
    {
      week: 4,
      description: 'Project Building',
      title: 'Project',
      lessons: [{ title: 'Todo App', etc: '5 hours' }],
    },
  ],
};

export default function Page({ params }: { params: Promise<{ id: string }>}) {
  const [course, setCourse] = useState<CourseInfoDto>(() => sampleCourse);
  const { setOrders, setCourseFees, setCourseFee } = orderStore.getState();

  const { accessToken } = authStore.getState();

  useEffect(() => {
    async function helper() {
      const { id } = (await params);
      const fetchedCourse = await CourseApi.getById(id);
      setCourse(fetchedCourse);
    }

    helper();
  }, [params]);

  return (
    <main className="container mx-auto p-8 flex flex-col gap-8">
      <div className="grid grid-cols-3 py-4 gap-4">
        <p className="text-4xl font-bold">{course.name}</p>
        <p>{course.description}</p>
        <button
          type="button"
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
          Buy
        </button>
      </div>
      <hr />
      {/* <Image alt="Cover" src={coverImage} className="my-8"/> */}
      <div className="grid grid-cols-2 gap-8">
        {course.curriculum.map((week) => <CurriculumCard key={week.week} curriculum={week} />)}
      </div>
    </main>
  );
}
