import NavigationBar from "@/components/Navbar";
import { ScrollIndicator } from "@/components/scroll-indicator";
import LandingModule from "@/modules/1_Landing";
import AboutMeModule from "@/modules/2_AboutMe";
import { SkillsModule } from "@/modules/3_Skills";
import ExperienceModule from "@/modules/4_Experiences";
import { ProjectsModule } from "@/modules/5_Projects";
import ContactModule from "@/modules/6_Contact";
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
          className="opacity-55"
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
