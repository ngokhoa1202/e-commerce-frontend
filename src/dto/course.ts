export interface CreateCourseDto {
  name: string
  subject: string
  duration: string
  description: string
  locationId: string
}

export interface CourseInfoDto {
  id: string
  name: string
  subject: string
  duration: string
  description: string

  curriculum: {
    week: number,
    description?: string,
    title: string,
    lessons: { title: string, etc: string }[],
  }[]

  fees: {
    id: string,
    courseId: string,
    description?: string,
    feeAmount: string | number,
    feeType: string,
  }[]
}
