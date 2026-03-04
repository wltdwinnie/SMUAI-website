import HeroSection from "@/components/home/hero-section";
import MissionVisionSection from "@/components/home/mission-vision-section";
import TestimonialsSection from "@/components/home/testimonials-section";

export default function HomePage() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <HeroSection />
      <MissionVisionSection />
      <TestimonialsSection />
    </div>
  );
}
