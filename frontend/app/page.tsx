import HeroSection from "@/components/Home/HeroSection";
import FadeInObserver from "@/components/Home/FadeInObserver";
import Marquee from "@/components/Home/Marquee";
import MissionSection from "@/components/Home/MissionSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-zinc-50 font-sans dark:bg-black">
      <FadeInObserver />
      <HeroSection />
      <Marquee />
      <MissionSection />
    </div>
  );
}
