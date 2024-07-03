import NavigationBar from "@/components/Navbar";
import LandingModule from "@/modules/1_Landing";
import AboutMeModule from "@/modules/2_AboutMe";
import { SkillsModule } from "@/modules/3_Skills";
import ExperienceModule from "@/modules/4_Experiences";
import { ProjectsModule } from "@/modules/5_Projects";
import ContactModule from "@/modules/6_Contact";

export default function Home() {
  return (
    <main>
      <div className="py-16 w-full h-screen">
        <NavigationBar />
        <LandingModule />
      </div>
      <AboutMeModule />
      <SkillsModule />
      <ExperienceModule />
      <ProjectsModule />
      <ContactModule />
    </main>
  );
}
