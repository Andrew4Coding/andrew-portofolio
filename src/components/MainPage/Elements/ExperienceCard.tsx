import Image from "next/image"
import { experienceCardInterface } from "./interface"
import { Reveal } from "../util/Reveal"

export const ExperienceCard: React.FC<experienceCardInterface> = ({
    item
}) => {
    return (
        <Reveal className="">
            <div className="w-full border-l-4 border-white flex">
                <Image src={`/exp-images/${item.companyLogo}`} alt="" height={20} width={20} className="-left-[1.4rem] top-1.5 relative w-10 h-10 p-2.5 rounded-full shadow-md object-contain bg-white" />
                <div className="w-full h-full py-2.5 flex flex-col gap-2">

                    <h2 className="font-bold text-lg text-white">{item.title}</h2>
                    <p className="text-white text-xs leading-loose">
                        as {item.description}
                    </p>
                    <span className="font-semibold text-xs text-white">{item.date}</span>
                    <ul className="text-xs leading-loose list-disc" style={{}}>
                        {
                            item.details.map((item, index) => {
                                return (
                                    <li  className="text-white" key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </Reveal>
    )
}