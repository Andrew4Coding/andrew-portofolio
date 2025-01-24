import NavigationBar from "@/components/navbar";
import { ScrollIndicator } from "@/components/scroll";
import LandingModule from "@/modules/HeroModule";
import AboutMeModule from "@/modules/AboutModule";
import { SkillsModule } from "@/modules/SkillModule";
import ExperienceModule from "@/modules/ExperienceModule";
import { ProjectsModule } from "@/modules/ProjectModule";
import ContactModule from "@/modules/ContactModule";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="w-full flex justify-center">
    <main id="home" className="relative min-h-screen flex flex-col gap-20">
      <ScrollIndicator />
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={"/gradient-group.png"}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-55 animate-pulse"
        />
      </div>
      <div className="py-16 w-full h-screen relative flex flex-col">
        <NavigationBar />
        <div className="flex items-center flex-grow  w-full">
          <LandingModule />
        </div>
      </div>
      <AboutMeModule />
      <SkillsModule />
      <ExperienceModule />
      <ProjectsModule />
      <ContactModule />
    </main>
  );
}
