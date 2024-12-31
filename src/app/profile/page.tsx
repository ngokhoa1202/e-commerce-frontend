'use client';

import React, { useEffect, useState } from 'react';
import ProfileApi from '@/api/profile';
import { ProfileDto } from '@/dto/profile';
import UserApi from '@/api/user';
import { authStore } from '../../stores/auth';
import ProfileInfo from './components/ProfileInfo';
import CourseList from './components/CourseList';
import { CourseDto } from '@/dto/myCourses';

const sampleData: ProfileDto = {
  id: '',
  avatar: '/tutors/tutor-1.jpg',
  firstname: 'Clay',
  lastname: 'Tien',
  degree: 'Bachelor',
  experienceYears: 1,
  bio: 'I am a software engineer',
  address: '123 Street, City, Country',
  birthOfDate: '1990-01-01',
  phoneNumber: '0912432312',
  phoneCode: '+84',
}

const sampleCourses: CourseDto[] = [
  {
    id: '123e4567-e',
    name: 'Introduction to Programming',
    subject: 'Programming',
    duration: '10 weeks',
    startDate: '2024-04-01T10:00:00Z',
    endDate: '2024-06-01T10:00:00Z',
    description: 'Learn the basics of programming',
    locationId: '123e4567-e',
    location: 'Tech Building, Room 101',
    tutors: [
      {
        username: 'tienclay',
        email: 'tienclay@gmail.com',
        role: 'STUDENT',
        status: 'ACTIVE',
      },
    ],
    fees: ['$100', '$200'],
  },
  {
    id: '15178506-63db-45d8-b3f0-61ac43154e97',
    name: 'English for Beginners',
    subject: 'English',
    duration: '3 months',
    startDate: '2024-12-01',
    endDate: '2025-02-28',
    locationId: '45f51cd3-47c8-41bd-9858-a34c99336c32',
    description: 'A course designed for individuals new to learning English.',
    location: 'Language Building, Room 102',
    tutors: [
      {
        username: 'tienclay',
        email: 'tienclay@gmail.com',
        role: 'STUDENT',
        status: 'ACTIVE',
      },
    ],
    fees: ['$100', '$200'],
  },
  {
    id: "932ba93c-3cb2-4c4d-b7c0-7f3518cc0029",
    name: "Advanced English Conversation",
    subject: "English",
    duration: "6 months",
    startDate: "2024-12-05",
    endDate: "2025-05-31",
    locationId: "84ffa2f3-2e27-4d31-ba75-14d83468e1d6",
    description: "Enhance your English communication skills with advanced conversation techniques.",
    location: 'Language Building, Room 102',
    tutors: [
      {
        username: 'tienclay',
        email: 'tienclay@gmail.com',
        role: 'STUDENT',
        status: 'ACTIVE',
      },
    ],
    fees: ['$100', '$200'],
  }
]


export default function Profile({ params }: { params: Promise<{ id: string }>}) {

  const [isFetching, setIsFetching] = useState(true);
  const [courses, setCourses] = useState<CourseDto[]>(() => sampleCourses);
  const [profile, setProfile] = useState<ProfileDto>(() => sampleData);
  const [profileId, setProfileId] = useState('')
  const [username, setUsername] = useState('')
  useEffect(() => {
    async function fetchData() {
      const user = await UserApi.getUserId(authStore.getState().accessToken);
      const { id } = await UserApi.getProfileId(user.id, authStore.getState().accessToken);

      const fetchedCourses = await UserApi.getCoursesOfUser(user.id, authStore.getState().accessToken);

      // const fetchedProfile = await ProfileApi.getByProfileId(fetchedProfileId, authStore.accessToken);
      const fetchedProfile = await ProfileApi.getByUserId(user.id, authStore.getState().accessToken);
      if(fetchedProfile) {
        console.log(fetchedProfile)
        setProfile(fetchedProfile)
      }
      if(fetchedCourses) {
        console.log(id)
        setCourses(fetchedCourses)
      }
      if(id) {
        setProfileId(id)
      }
      if(user) {
        setUsername(user.username)
      }
      // setIsFetching(false);
    }

    fetchData();
  }, []);
  

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* <h1 className='text-3xl font-bold mb-8 text-blue-600'>User Profile</h1> */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='md:col-span-1'>
          <ProfileInfo profile={profile} profileId={profileId} username={username}/>
        </div>
        <div className='md:col-span-2'>
          <CourseList courses={courses || []} />
        </div>
      </div>
    </div>
  )
}

