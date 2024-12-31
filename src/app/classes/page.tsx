'use client';

import React, { useEffect, useState } from 'react';
import CourseApi from '@/api/course';
import { CourseFullDto } from '@/dto/course';
import ClassList from '../_components/classes/ClassList';


export default function ClassesPage() {
  const [isFetching, setIsFetching] = useState(true);
  const [courses, setCourses] = useState<CourseFullDto[]>(() => []);
  useEffect(() => {
    async function fetchData() {
      const fetchedCourses = await CourseApi.get();
      setCourses(fetchedCourses);
      setIsFetching(false);
    }
    fetchData();
  }, []);
  

  return (
    <main>
      <section className="container px-8">
        <h1 className="font-bold text-4xl text-center mt-12">Our classes</h1>
        <div className="container grid grid-cols-12 gap-x-0 mt-10">
          <div className="col-span-2">
            Filter
          </div>
          <ClassList courses={[...courses]} />
        </div>
      </section>
    </main>
   
  );
}
