import Image from "next/image"
import { experienceCardInterface } from "./interface"
import { Reveal } from "../util/Reveal"

export const ExperienceCard: React.FC<experienceCardInterface> = ({
    item
}) => {
    return (
        <Reveal>
            <div className="w-full border-l-4 border-black flex items-center">
                <div className="w-[1rem] h-[1rem] bg-black rounded-full -left-2.5 relative justify-center">
                </div>
                <div className="w-full h-full pl-5 py-2.5">
                    <div className="w-full h-full bg-white/50 shadow-md p-5 lg:p-10 rounded-xl flex flex-col gap-2">

                        <Image src={`/exp-images/${item.companyLogo}`} alt="" height={20} width={20} className="w-12 h-12 p-2.5 rounded-full shadow-md object-contain"/>

                        <h2 className="font-bold text-lg">{item.title}</h2>
                        <p className="text-xs leading-loose">
                            {item.description}
                        </p>

                        <span className="font-semibold text-xs">{item.date}</span>
                        <ul className="text-xs leading-loose">
                            {
                                item.details.map(item => {
                                    return (
                                        <li className="text-[#54555F]" key={item}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Reveal>
    )
}