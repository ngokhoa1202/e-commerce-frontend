'use client';

import React, { useEffect, useState } from 'react';
import ProfileApi from '@/api/profile';
import { ProfileDto } from '@/dto/profile';
import UserApi from '@/api/user';
import { initialState } from '../../stores/auth';
import ProfileInfo from './components/ProfileInfo';
import CourseList from './components/CourseList';
import { CourseDto } from '@/dto/myCourses';
const sampleData: ProfileDto = {
  id: '',
  avatar: '/tutors/tutor-1.jpg',
  firstname: "Clay",
  lastname: "Tien",
  degree: "Bachelor",
  experienceYears: 1,
  bio: "I am a software engineer",
  address: "123 Street, City, Country",
  birthOfDate: "1990-01-01",
  phoneNumber: "0912432312",
  phoneCode: "+84",
}

const sampleCourses: CourseDto[] = [
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
    fees: ["$100", "$200"],
  },
  {
    id: "223e4567-f",
    name: "Advanced Web Development",
    subject: "Web Development",
    duration: "12 weeks",
    startDate: "2024-05-01T10:00:00Z",
    endDate: "2024-07-24T10:00:00Z",
    description: "Master web development with modern frameworks.",
    locationId: "223e4567-f",
    location: "Innovation Hub, Room 202",
    tutors: [
      {
        username: "johndoe",
        email: "johndoe@example.com",
        role: "INSTRUCTOR",
        status: "ACTIVE",
      },
    ],
    fees: ["$300"],
  },
  {
    id: "323e4567-g",
    name: "Data Science Essentials",
    subject: "Data Science",
    duration: "8 weeks",
    startDate: "2024-06-01T10:00:00Z",
    endDate: "2024-07-26T10:00:00Z",
    description: "An introductory course on data science principles and practices.",
    locationId: "323e4567-g",
    location: "Data Science Lab, Room 103",
    tutors: [
      {
        username: "janesmith",
        email: "janesmith@example.com",
        role: "INSTRUCTOR",
        status: "ACTIVE",
      },
      {
        username: "alexlee",
        email: "alexlee@example.com",
        role: "ASSISTANT",
        status: "ACTIVE",
      },
    ],
    fees: ["$150", "$200"],
  },
  {
    id: "423e4567-h",
    name: "Machine Learning Fundamentals",
    subject: "Machine Learning",
    duration: "10 weeks",
    startDate: "2024-07-01T10:00:00Z",
    endDate: "2024-09-01T10:00:00Z",
    description: "Learn the building blocks of machine learning.",
    locationId: "423e4567-h",
    location: "AI Research Center, Room 404",
    tutors: [
      {
        username: "dr.alan",
        email: "dr.alan@example.com",
        role: "INSTRUCTOR",
        status: "ACTIVE",
      },
    ],
    fees: ["$500"],
  }
]


export default function Profile({ params }: { params: Promise<{ id: string }>}) {
  // In a real application, you would fetch the tutor data based on the [id] parameter
  
  const [isFetching, setIsFetching] = useState(true);
  const [courses, setCourses] = useState<CourseDto[]>(() => sampleCourses);
  const [profile, setProfile] = useState<ProfileDto>(() => sampleData);
  useEffect(() => {
    async function fetchData() {
      const fetchedProfileId = await UserApi.getProfileId(initialState.userId, initialState.accessToken);

      const fetchedCourses = await UserApi.getCoursesOfUser(initialState.userId, initialState.accessToken);

      const fetchedProfile = await ProfileApi.getById(fetchedProfileId, initialState.accessToken);

      console.log(fetchedCourses)
      console.log(fetchedProfile)
      // setCourses(fetchedCourses)
      // setProfile(fetchedProfile)

    }
    fetchData();
  }, []);
  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-blue-600">User Profile</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <ProfileInfo profile={profile} />
        </div>
        <div className="md:col-span-2">
          <CourseList courses={courses} />
        </div>
      </div>
    </div>
  )
}

