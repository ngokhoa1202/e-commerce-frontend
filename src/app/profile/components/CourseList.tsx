import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Link from 'next/link';
import { CourseDto } from '@/dto/myCourses';


export default function CourseList({ courses }: { courses: CourseDto[] }) {
  const router: AppRouterInstance = useRouter();

  // function onClickCourse(courseId: string) {
  //   router.push(`classes/${courseId}`);
  // }


  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">My Courses</h2>
      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-sm rounded-lg border border-gray-200">
          <p className="text-gray-600 text-lg">You have not registered for any courses</p>
          <Link href="/classes">
            <p className="text-sm text-blue-500 mt-2">
            Explore and enroll in suitable courses to start your learning journey
            </p>
          </Link>
        </div>
      ) : (
        <div className="max-h-[34rem] overflow-y-auto space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-sm rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
              // onClick={(e) => onClickCourse(course.id)}
              role="button"
              tabIndex={0}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.name}</h3>
              <p className="text-blue-500 mb-2">{course.subject}</p>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <strong className="font-semibold">Duration:</strong> {course.duration}
                </div>
                <div>
                  <strong className="font-semibold">Start Date:</strong>{' '}
                  {new Date(course.startDate).toLocaleDateString()}
                </div>
                <div>
                  <strong className="font-semibold">End Date:</strong>{' '}
                  {new Date(course.endDate).toLocaleDateString()}
                </div>
                <div>
                  <strong className="font-semibold">Tutor:</strong> {course.tutors[0].username}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


