import HeroSection from "./_components/HeroSection";
import PartnerSection from "./_components/PartnerSection";
import GroupTab from "./_components/GroupTab";
import PotraitSection from "./_components/PotraitSection";


export default function Home() {
  return (
    <main>
      <GroupTab />
      <PotraitSection />
      <HeroSection />
      <PartnerSection />
    </main>
  );
}
