import HeroSection from "@/components/Home/HeroSection";
import FadeInObserver from "@/components/Home/FadeInObserver";
import Marquee from "@/components/Home/Marquee";
import MissionSection from "@/components/Home/MissionSection";
import ServicesSection from "@/components/Home/ServicesSection";
import BannnerFreeCamp from "@/components/Home/BannnerFreeCamp";
import DoctorsList from "@/components/Home/DoctorsList";
import Testimonials from "@/components/Home/Testimonials";
import HomeScrollHandler from "@/components/layout/HomeScrollHandler";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      <FadeInObserver />
      <HomeScrollHandler />
      <HeroSection />
      <Marquee />
      <MissionSection />
      <ServicesSection />
      <BannnerFreeCamp />
      <DoctorsList />
      <Testimonials />
    </div>
  );
}
