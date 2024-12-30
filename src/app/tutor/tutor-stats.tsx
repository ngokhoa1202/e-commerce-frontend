interface TutorStatsProps {
  stats: {
    totalStudents: number
    totalCourses: number
    averageRating: number
  }
}

export function TutorStats({ stats }: TutorStatsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Tutor Statistics</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <span className="font-semibold text-gray-900 dark:text-gray-100">{stats.totalStudents.toLocaleString()}</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">Total Students</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <span className="font-semibold text-gray-900 dark:text-gray-100">{stats.totalCourses}</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">Courses</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="font-semibold text-gray-900 dark:text-gray-100">{stats.averageRating.toFixed(1)}</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">Average Rating</span>
        </div>
      </div>
    </div>
  )
}

