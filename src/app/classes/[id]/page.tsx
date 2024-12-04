'use client';

// import Image from "next/image";
// import coverImage from "../../_assets/course-cover.png"
import { useEffect, useState } from 'react';
import { CourseInfoDto } from '@/dto/course';
import CourseApi from '@/api/course';
import CurriculumCard from '@/app/_components/classes/CurriculumCard';

function isCourse(course: CourseInfoDto | object): course is CourseInfoDto {
  return !!(course as CourseInfoDto).id;
}

export default function Page({ params }: { params: Promise<{ id: string }>}) {
  const [course, setCourse] = useState<CourseInfoDto | object>(() => ({}));

  useEffect(() => {
    async function helper() {
      const { id } = (await params);
      const fetchedCourse = await CourseApi.getById(id);
      console.log(fetchedCourse);
      setCourse(fetchedCourse);
    }

    helper();
  }, [params]);

  return isCourse(course)
    ? (
      <main className="container mx-auto p-8 flex flex-col gap-8">
        <div className="grid grid-cols-2 py-4 gap-4">
          <p className="text-4xl font-bold">{course.name}</p>
          <p>{course.description}</p>
        </div>
        <hr />
        {/* <Image alt="Cover" src={coverImage} className="my-8"/> */}
        <div className="grid grid-cols-2 gap-8">
          {course.curriculum.map((week) => <CurriculumCard key={week.week} curriculum={week} />)}
        </div>
      </main>
    ) : (
      <div>temp</div>
    );
}
