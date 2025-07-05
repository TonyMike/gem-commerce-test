import HealthSection from '@/components/HealthSection';
import HeroSection from '@/components/HeroSection';
import NutritionSection from '@/components/NutritionSection';
import PrebioticsSection from '@/components/PrebioticsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white  ">
      {/* Hero Section */}
      <HeroSection />

      {/* Nutrition Section */}
      <NutritionSection />

      {/* Gastrointestinal Health Section */}
      <HealthSection />

      {/* Prebiotics Section */}
      <PrebioticsSection />
    </div>
  );
}
