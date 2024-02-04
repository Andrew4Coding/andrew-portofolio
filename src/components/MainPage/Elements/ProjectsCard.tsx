import Image from "next/image"
import { projectsDataInterface } from "../interface"
import { Reveal } from "../util/Reveal";

import { motion } from 'framer-motion'
import Link from "next/link";

export const ProjectsCard: React.FC<{ data: projectsDataInterface }> = ({ data }) => {
    const { name, description, skills, link, image } = data;

    return (
        <Reveal>
            <div className="shadow-lg bg-black/50 duration-1000 hover:scale-[101%] w-full p-5 flex flex-col gap-5 rounded-xl h-full">
                <div className="flex flex-col gap-5">
                    <div className="h-[8rem] lg:h-[15rem] w-full rounded-xl">
                        <Image src={`/projects-images/${image}`} width={1000} height={1000} alt="" className="object-cover h-full object-center rounded-md aspect-video" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-lg lg:text-2xl lg:min-h-[6rem] text-white">
                            {name}
                        </span>

                        <p className="text-xs leading-loose line-clamp-5 text-[#f1f1f1]">
                            {description}
                        </p>

                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-end gap-5">
                    <div className="flex items-center justify-around text-sm bg-white p-3 w-full rounded-xl px-5">    
                        {
                            skills.map(item => {
                                return (
                                    <span key={item} className="duration-100 hover:scale-110">
                                        <Image src={`/skills-svg/${item}`} alt="" width={20} height={20} className=""/>
                                    </span>
                                )
                            })
                        }
                    </div>
                    <Link href={link} target="_blank">
                        <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#f1f1f1] text-black w-full h-fit p-5 rounded-xl flex items-center gap-5 justify-center">
                            <span className="text-xs font-semibold">Check More</span>
                            <Image src={'/svg/next.svg'} alt="" width={15} height={15} className="fill-white" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </Reveal>
    )
}