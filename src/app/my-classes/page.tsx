import { authStore } from '@/stores';
import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import AuthApi from '@/api/auth';
import CourseApi from '@/api/course';

import ClassList from '../_components/classes/ClassList';
import { CourseFullDto } from '@/dto/course';

export default function MyClasses(): ReactElement {
  
  const {accessToken} = authStore.getState();
  const [myCourses, setMyCourses] = useState<CourseFullDto[]>(() => []);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const fetchedCourses = await CourseApi.get();
      setMyCourses(fetchedCourses);
      
    }
    fetchData();
  }, []);

  const router = useRouter();

  if (!accessToken) {
    router.replace('/');
  }

  return (
    <section className="container px-8">
      <h1 className="font-bold text-4xl text-center mt-12">Our classes</h1>
      <div className="container grid grid-cols-12 gap-x-0 mt-10">
        <div className="col-span-2">
          Filter
        </div>
        <ClassList classes={[...myCourses]} />
      </div>
    </section>
  );
}
