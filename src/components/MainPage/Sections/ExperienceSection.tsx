import { ExperienceCard } from "../Elements/ExperienceCard"
import { SectionTitle } from "../../Template/SectionTitle"
import { myExperiences } from "../constant"
import { Reveal } from "../util/Reveal"
import { Section } from "@/components/Template/Section"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"

export const ExperienceSection: React.FC = () => {
    return (
        // <Section id="experience" className="flex-col">
        //         <SectionTitle>
        //             Experience
        //         </SectionTitle>
        //         <div className="flex flex-col">
        //             {
        //                 myExperiences.map((item) => {
        //                     return (
        //                         <ExperienceCard item={item} key={item.title} />
        //                     )
        //                 })
        //             }
        //         </div>
        // </Section>
        <Section className="flex-col">
            <SectionTitle>
                Experience
            </SectionTitle>
            <Reveal>
                <Accordion allowMultiple className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3  gap-5">
                    {
                        myExperiences.map(item => {
                            return (
                                <ExperienceCard item={item}/>
                            )
                        })
                    }

                </Accordion>
            </Reveal>
        </Section>
    )
}