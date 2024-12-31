'use client';

import { useEffect, useState, CSSProperties } from 'react';
import { CourseFullDto } from '@/dto/course';
import CourseApi from '@/api/course';
import CurriculumCard from '@/app/_components/classes/CurriculumCard';
import OrderApi from '@/api/order';
import { authStore, orderStore } from '@/stores';
import { OrderStatus, SAMPLE_COURSE_FULL_DTO, SAMPLE_CURRICULUM, TIMEOUT } from '@/constants';
import CourseFeeApi from '@/api/courseFee';
import { WeeklyPlan } from '@/dto/weeklyPlan';
import CurriculumApi from '@/api/curriculum';
import { HashLoader } from 'react-spinners';


export default function ClassDetailPage({ params }: { params: Promise<{ id: string }> }) {

  const [isFetching, setIsFetching] = useState(false);

  const [course, setCourse] = useState<CourseFullDto>(() => SAMPLE_COURSE_FULL_DTO);
  const [curriculum, setCurriculum] = useState<WeeklyPlan[]>(() => SAMPLE_CURRICULUM);
  const loaderCSSProperties: CSSProperties = {
    display: 'block',
    margin: '4rem auto'
  }
  const { accessToken } = authStore.getState();

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, TIMEOUT);

    async function fetchCourse() {
      const { id } = (await params);
      const fetchedCourse = await CourseApi.getById(id);
      setCourse(fetchedCourse);
    }

    async function fetchCurriculum() {
      const { id } = await params;
      const fetchedCurriculum = await CurriculumApi.getByCourseId(id);
      setCurriculum(fetchedCurriculum);
    }

    fetchCourse();
    fetchCurriculum();
  }, [params]);

  return (
    <main className="container mx-auto px-16 py-8 flex flex-col gap-8">

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
          <>
            <div className="grid grid-cols-12 py-4 gap-4">
              <div className="col-span-9">
                <h1 className="text-4xl font-bold col-span-4">{course.name}</h1>
                <h2 className="text-2xl font-semibold col-span-6 mt-4">{course.description}</h2>
              </div>
            </div>
            <hr />
            {/* <Image alt="Cover" src={coverImage} className="my-8"/> */}
            <div className="grid grid-cols-2 gap-8">
              {curriculum.map((weekPlan) => <CurriculumCard key={weekPlan.weekNumber} curriculum={weekPlan} />)}
            </div>
          </>

        )
      }
    </main>
  );
}
