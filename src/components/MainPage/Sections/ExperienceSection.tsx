import { ExperienceCard } from "../Elements/ExperienceCard"
import { SectionTitle } from "../Elements/SectionTitle"
import { myExperiences } from "../constant"
import { Reveal } from "../util/Reveal"

export const ExperienceSection: React.FC = () => {
    return (
        <Reveal>
            <section className="min-h-screen p-10 sm:p-24 lg:p-28 flex flex-col gap-5" id="experience">
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
            </section>
        </Reveal>
    )
}