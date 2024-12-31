interface Course {
  id: number
  title: string
  students: number
  rating: number
}

interface CoursesListProps {
  courses: Course[]
}

export function CoursesList({ courses }: CoursesListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Courses</h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{course.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{course.students.toLocaleString()} students</p>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-gray-900 dark:text-gray-100">{course.rating.toFixed(1)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

