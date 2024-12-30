export interface CourseDto {
    id: string;
    name: string;
    subject: string;
    duration: string;
    startDate: string;
    endDate: string;
    description: string;
    locationId: string;
    location: string; 
    tutors: TutorDto[];
    fees: string[]; 
  }
  
  export interface TutorDto {
    username: string;
    email: string;
    role: string; 
    status: string; 
  }
  