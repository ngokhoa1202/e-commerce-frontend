'use client';

import React, { useEffect, useState } from 'react';
import CourseApi from '@/api/course';
import { CourseInfoDto } from '@/dto/course';
import ClassList from '../_components/classes/ClassList';

const sampleCourses: CourseInfoDto[] = [
  {
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
  },
  // {
  //   id: "2",
  //   name: "Advanced JavaScript",
  //   description: "Deep dive into JavaScript and explore ES6+ features.",
  //   subject: "",
  //   duration: "3 weeks",
  //   fees: [{
  //     id: "2", courseId: "2", feeType: "One-time", feeAmount: 30,
  //   }],
  //   curriculum: [
  //     { week: 1, title: "Async JavaScript", lessons: [] },
  //     { week: 2, description: "Functional style" },
  //     { week: 3, description: "ES6+ Features" },
  //   ],
  // },
  // {
  //   id: "3",
  //   name: "UI/UX Design Fundamentals",
  //   description: "Master the basics of UI/UX design, focusing on user-centered design.",
  //   classLink: "/course-details/ui-ux",
  //   curriculum: [
  //     { week: 1, description: "Understanding Users" },
  //     { week: 2, description: "Design Principles" },
  //     { week: 3, description: "Prototyping and Testing" },
  //   ],
  // },
];

for (let i = 2; i <= 10; i += 1) {
  sampleCourses.push({
    ...sampleCourses[0],
    id: `${i}`,
    fees: [{ ...sampleCourses[0].fees[0], id: `${i}`, courseId: `${i}` }],
  });
}

export default function Page() {
  const [isFetching, setIsFetching] = useState(true);
  const [courses, setCourses] = useState<CourseInfoDto[]>(() => []);
  useEffect(() => {
    async function fetchData() {
      const fetchedCourses = await CourseApi.get();
      setCourses(fetchedCourses);
      setIsFetching(false);
    }
    fetchData();
  }, []);

  return (
    <section className="container px-8">
      <h1 className="font-bold text-4xl text-center mt-12">Our classes</h1>
      <div className="container grid grid-cols-12 gap-x-0 mt-10">
        <div className="col-span-2">
          Filter
        </div>
        <ClassList classes={[...sampleCourses, ...courses]} />
      </div>
    </section>
  );
}
