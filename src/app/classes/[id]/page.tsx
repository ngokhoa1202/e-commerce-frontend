'use client';

// import Image from "next/image";
// import coverImage from "../../_assets/course-cover.png"
import { useEffect, useState } from 'react';
import { CourseInfoDto } from '@/dto/course';
import CourseApi from '@/api/course';
import CurriculumCard from '@/app/classes/_components/CurriculumCard';
import OrderApi from '@/api/order';
import { authStore } from '@/stores/auth';
import { OrderStatus } from '@/constants';

const sampleCourse = {
  id: '1',
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

  const { userId } = authStore.getState();

  useEffect(() => {
    async function helper() {
      const { id } = (await params);
      const fetchedCourse = await CourseApi.getById(id);
      console.log(fetchedCourse);
      console.log(userId);
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
          onClick={() => OrderApi.create({
            studentId: userId,
            totalAmount: 10,
            courseId: course.id,
            courseFeeId: course.fees[0].id,
            status: OrderStatus.pending,
          })}
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
