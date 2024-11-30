import HeroSection from "./_components/HeroSection";
import PartnerSection from "./_components/PartnerSection";
import GroupTab from "./_components/GroupTab";
import Features from "./_components/FeaturesSection";
import TestimonialSection from "./_components/TestimonialSection";


export default function Homepage() {
  return (
    <main>
      <GroupTab />
      <HeroSection />
      <PartnerSection />
      <TestimonialSection />
      <Features />
    </main>
  );
}
