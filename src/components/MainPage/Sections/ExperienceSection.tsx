import { ExperienceCard } from "../Elements/ExperienceCard"
import { SectionTitle } from "../../Template/SectionTitle"
import { myExperiences } from "../constant"
import { Reveal } from "../util/Reveal"
import { Section } from "@/components/Template/Section"

export const ExperienceSection: React.FC = () => {
    return (
        <Section id="experience">
                <SectionTitle>
                    Experience
                </SectionTitle>
                <div className="flex flex-col">
                    {
                        myExperiences.map((item) => {
                            return (
                                <ExperienceCard item={item} key={item.title} />
                            )
                        })
                    }
                </div>
        </Section>
    )
}