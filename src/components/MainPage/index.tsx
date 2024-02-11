import { AboutMeSection } from "./Sections/AboutMeSection"
import { Background } from "./Sections/Background"
import { Cover } from "./Sections/Cover"
import { ExperienceSection } from "./Sections/ExperienceSection"
import { Footer } from "./Sections/Footer"
import { LandingSection } from "./Sections/LandingSection"
import { ProjectsSection } from "./Sections/ProjectsSection"
import { SendMessageSection } from "./Sections/SendMessageSection"
import { SkillsSection } from "./Sections/SkillsSection"
import { WelcomeSection } from "./Sections/WelcomeSection"
import { ScrollIndicator } from "./util/ScrollIndicator"

export const MainPage: React.FC = () => {
    return (
        <>
            <Background />
            <div className="relative z-50">
                <ScrollIndicator />
                <LandingSection />
                {/* <WelcomeSection /> */}
                <AboutMeSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <SendMessageSection />
                <Footer />

                <Cover />
            </div>
        </>
    )
}