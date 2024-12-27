'use client';

import React, { useEffect, useState } from 'react';
import ProfileApi from '@/api/tutor';
import { ProfileDto } from '@/dto/profile';
import { ProfileHeader } from './components/profile-header'
import { AboutTutor } from './components/about-tutor'
import { CoursesList } from './components/courses-list'
import { TutorStats } from './components/tutor-stats'

const sampleProfile:ProfileDto = {
  name: "Dr. Jane Smith",
  title: "Professor of Computer Science",
  image: "/placeholder.svg?height=200&width=200",
  bio: "Dr. Jane Smith is a renowned expert in artificial intelligence and machine learning. With over 15 years of experience in both academia and industry, she brings a wealth of knowledge to her courses.",
  expertise: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python Programming"],
  courses: [
    { id: 1, title: "Introduction to Machine Learning", students: 15000, rating: 4.8 },
    { id: 2, title: "Advanced AI Techniques", students: 8000, rating: 4.9 },
    { id: 3, title: "Data Science with Python", students: 12000, rating: 4.7 },
  ],
  stats: {
    totalStudents: 35000,
    totalCourses: 3,
    averageRating: 4.8,
  }
}

export default function Profile({ params }: { params: Promise<{ id: string }>}) {
  // In a real application, you would fetch the tutor data based on the [id] parameter
  
  const [isFetching, setIsFetching] = useState(true);
  const [profile, setProfile] = useState<ProfileDto>(() => sampleProfile);
  useEffect(() => {
    async function fetchData() {
      const fetchedProfile = await ProfileApi.getById();
      
    }
    fetchData();
  }, []);
  

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader name={profile.firstname + ' ' +profile.lastname} title={profile.title} image={profile.image} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <AboutTutor bio={profile.bio} expertise={profile.experienceYears} />
          <CoursesList courses={courses} />
        </div>
        <div>
          <TutorStats stats={profile.stats} />
        </div>
      </div>
    </div>
  )
}

