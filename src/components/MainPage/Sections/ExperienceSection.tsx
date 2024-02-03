import { ExperienceCard } from "../Elements/ExperienceCard"
import { myExperiences } from "../constant"
import { Reveal } from "../util/Reveal"

export const ExperienceSection: React.FC = () => {
    return (
        <Reveal>
            <section className="min-h-screen p-10 lg:p-40 flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl lg:text-4xl font-bold" id="about-me">🥼 Experience</h1>
                </div>
                <div>
                    {
                        myExperiences.map((item) => {
                            return (
                                <ExperienceCard item={item} key={item.title}/>
                            )
                        })
                    }
                </div>
            </section>
        </Reveal>
    )
}