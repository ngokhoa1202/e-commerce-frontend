import { CourseDto } from "@/dto/myCourses"

export const sampleCourses: CourseDto[] = [
  {
    id: "123e4567-e",
    name: "Introduction to Programming",
    subject: "Programming",
    duration: "10 weeks",
    startDate: "2024-04-01T10:00:00Z",
    endDate: "2024-06-01T10:00:00Z",
    description: "Learn the basics of programming",
    locationId: "123e4567-e",
    location: "Tech Building, Room 101",
    tutors: [
      {
        username: "tienclay",
        email: "tienclay@gmail.com",
        role: "STUDENT",
        status: "ACTIVE",
      },
    ],
    fees: ["$100", "$200"], // Replace with actual fee details if needed.
  },
];

export default function CourseList({ courses } : {courses: CourseDto[]}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
      {courses.map((course) => (
        <div key={course.id} className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
          <p className="text-gray-600 mb-2">{course.subject}</p>
          <p className="text-sm text-gray-600 mb-4">{course.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="font-semibold">Duration:</strong> {course.duration}
            </div>
            <div>
              <strong className="font-semibold">Start Date:</strong> {new Date(course.startDate).toLocaleDateString()}
            </div>
            <div>
              <strong className="font-semibold">End Date:</strong> {new Date(course.endDate).toLocaleDateString()}
            </div>
            <div>
              <strong className="font-semibold">Tutor:</strong> {course.tutors[0].username}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

