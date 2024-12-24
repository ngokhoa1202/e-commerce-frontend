'use client';

import { authStore } from '@/stores';
import { ReactElement, useState, useEffect, CSSProperties } from 'react';
import { useRouter } from 'next/navigation';

import CourseApi from '@/api/course';

import ClassList from '../_components/classes/ClassList';
import { CourseFullDto } from '@/dto/course';
import { TIMEOUT } from '@/constants';
import { HashLoader } from 'react-spinners';

export default function MyClasses(): ReactElement {
  
  const {accessToken} = authStore.getState();
  const router = useRouter();


  const [myCourses, setMyCourses] = useState<CourseFullDto[]>(() => []);

  const [isFetching, setIsFetching] = useState(false);
  const loaderCSSProperties: CSSProperties = {
    display: 'block',
    margin: '4rem auto'
  }

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, TIMEOUT);

    async function fetchData() {
      if (!accessToken) {
        router.replace('/');
      }
      const fetchedCourses = await CourseApi.getByAccessToken(accessToken);
      setMyCourses(fetchedCourses);
    }
    fetchData();
  }, [accessToken]);


  return (
    <section className="container px-8">
      <h1 className="font-bold text-4xl text-center mt-12">Our classes</h1>
      {
        (isFetching) ? (
          <HashLoader 
            color="#1D4ED8"
            size={64}
            cssOverride={loaderCSSProperties}
            aria-label="Loading Spinner"
            loading={isFetching}
          />
        ) : (
          <div className="container grid grid-cols-12 gap-x-0 mt-10">
            <div className="col-span-2">
              Filter
            </div>
            <ClassList classes={[...myCourses]} />
          </div>
        )
      }
    </section>
  );
}
