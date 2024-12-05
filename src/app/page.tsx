'use client';

import { useState, SyntheticEvent } from 'react';
import { UserRole } from '@/constants';
import HeroSection from './_components/HeroSection';
import PartnerSection from './_components/PartnerSection';
import GroupTab from './_components/GroupTab';
import Features from './_components/FeaturesSection';
import TestimonialSection from './_components/TestimonialSection';

export default function Homepage() {
  const [userRole, setUserRole] = useState(UserRole.Parent);

  const changeUserRole = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (['Tutor', 'Parent'].includes(e.currentTarget.value)) {
      setUserRole(UserRole[e.currentTarget.value as keyof typeof UserRole]);
    }
  };

  return (
    <main>
      <GroupTab props={{ onChangeUserRole: changeUserRole, currentUserRole: userRole }} />
      <HeroSection props={{ currentUserRole: userRole }} />
      <PartnerSection />
      <TestimonialSection />
      <Features />
    </main>
  );
}
