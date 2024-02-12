import Image from "next/image"
import { projectsDataInterface } from "../interface"
import { Reveal } from "../util/Reveal";

import { motion } from 'framer-motion'
import Link from "next/link";

export const ProjectsCard: React.FC<{ data: projectsDataInterface }> = ({ data }) => {
    const { name, description, skills, link, image } = data;

    return (
        <Reveal>
            <div className="shadow-lg bg-white text-black duration-1000 hover:scale-[101%] w-full p-5 flex flex-col gap-5 rounded-xl h-full">
                <div className="flex flex-col gap-5">
                    <div className="aspect-video w-full rounded-xl">
                        <Image src={`/projects-images/${image}`} width={1920} height={1080} alt="" className="object-cover h-full object-center rounded-md aspect-video drop-shadow-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-semibold text-lg lg:text-xl lg:min-h-[4rem] ">
                            {name}
                        </span>

                        <p className="text-xs leading-loose line-clamp-5 ">
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
                                        <Image src={`/skills-svg/${item}`} alt="" width={20} height={20} className="mix-blend-multiply"/>
                                    </span>
                                )
                            })
                        }
                    </div>
                    <Link href={link} target="_blank">
                        <motion.button 
                        whileTap={{ scale: 0.9 }}
                        whileHover={{
                            scale: 1.03,
                            transition: {
                                duration: 0.5
                            }
                        }}
                        className="bg-[#f1f1f1] text-black w-full h-fit p-5 rounded-xl flex items-center gap-5 justify-center">
                            <span className="text-xs font-semibold">Check More</span>
                            <Image src={'/svg/next.svg'} alt="" width={15} height={15} className="" />
                        </motion.button>
                    </Link>
                </div>
            </div>
        </Reveal>
    )
}