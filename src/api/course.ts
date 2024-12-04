import { CourseInfoDto } from '@/dto/course';

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

const sampleCourse = {
  id: "1",
  name: "Introduction to Web Development",
  description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
  subject: "",
  duration: "4 weeks",
  fees: [{
    id: "1", courseId: "1", feeType: "One-time", feeAmount: 20,
  }],
  curriculum: [
    {
      week: 1,
      description: "HTML Basics",
      title: "HTML",
      lessons: [{ title: "Tags", etc: "1 hour" }],
    },
    {
      week: 2,
      description: "CSS Styling",
      title: "CSS",
      lessons: [{ title: "Syntax", etc: "30 mins" }, { title: "Selectors", etc: "2 hours" }],
    },
    {
      week: 3,
      description: "JavaScript Introduction",
      title: "JavaScript",
      lessons: [{ title: "DOM", etc: "1 hour" }, { title: "Syntax", etc: "2 hours" }, { title: "ES6", etc: "1 hour" }],
    },
    {
      week: 4,
      description: "Project Building",
      title: "Project",
      lessons: [{ title: "Todo App", etc: "5 hours" }],
    },
  ],
};

export default class CourseApi {
  static format(course: object): CourseInfoDto {
    return {
      ...course,
      ...JSON.parse(course.description),
    };
  }

  static async get(): Promise<CourseInfoDto[]> {
    const response = await fetch(`${BE_URL}/courses`, {
      method: 'GET',
    });
    const { data } = await response.json();
    return data.map((course) => CourseApi.format(course));
  }

  static async getById(courseId: string): Promise<CourseInfoDto> {
    const response = await fetch(`${BE_URL}/courses/${courseId}`, {
      method: 'GET',
    });
    const { data } = await response.json();
    return data.id ? CourseApi.format(data) : sampleCourse;
  }
}
