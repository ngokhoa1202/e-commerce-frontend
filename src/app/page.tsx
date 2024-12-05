'use client';

import { useState, SyntheticEvent } from 'react';
import { UserRole, ROLES } from '@/constants';
import HeroSection from './_components/HeroSection';
import PartnerSection from './_components/PartnerSection';
import GroupTab from './_components/GroupTab';
import Features from './_components/FeaturesSection';
import TestimonialSection from './_components/TestimonialSection';

export default function Homepage() {
  const [userRole, setUserRole] = useState(UserRole.Student);

  const changeUserRole = (e: SyntheticEvent<HTMLButtonElement>) => {
    if (ROLES.includes(e.currentTarget.value)) {
      setUserRole(e.currentTarget.value as UserRole);
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
