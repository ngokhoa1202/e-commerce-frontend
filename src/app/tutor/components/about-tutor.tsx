interface AboutTutorProps {
  bio: string
  expertise: string[]
}

export function AboutTutor({ bio, expertise }: AboutTutorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">About the Tutor</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{bio}</p>
      <div>
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Areas of Expertise:</h3>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

