import { SidebarNavigation } from "./Elements/SideNavigation"
import { AboutMeSection } from "./Sections/AboutMeSection"
import { Background } from "./Sections/Background"
import { ExperienceSection } from "./Sections/ExperienceSection"
import { Footer } from "./Sections/Footer"
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
                {/* <SidebarNavigation /> */}
                <ScrollIndicator />
                <WelcomeSection />
                <AboutMeSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <SendMessageSection />
                <Footer />
            </div>
        </>
    )
}