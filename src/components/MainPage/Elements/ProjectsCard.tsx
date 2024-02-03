import Image from "next/image"
import { projectsDataInterface } from "../interface"
import Link from "next/link";
import { Reveal } from "../util/Reveal";

export const ProjectsCard: React.FC<{ data: projectsDataInterface }> = ({ data }) => {
    const { name, description, skills, link } = data;

    return (
        <Reveal>
            <div className="min-h-[30rem] shadow-lg bg-white/50 duration-1000 hover:scale-[101%] w-full p-10 flex flex-col gap-5 rounded-xl">
                <div className="flex flex-col gap-5">
                    <div className="bg-[#E1E1E1] h-[10rem] lg:h-[15rem] w-full rounded-xl">
                        <Image src={'/images/welcome.jpg'} width={1000} height={1000} alt="" className="object-cover h-full object-top rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-bold text-xl lg:text-2xl min-h-[4rem]">{name}</span>

                        <p className="text-xs leading-loose line-clamp-4 text-[#54555F]">
                            {description}
                        </p>

                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-end gap-5">
                    <div className="flex gap-2 text-sm">    
                        {
                            skills.map(item => {
                                return (
                                    <span key={item}>
                                        <Image src={`/skills-svg/${item}.svg`} alt="" width={20} height={20} className=""/>
                                    </span>
                                )
                            })
                        }
                    </div>
                    <button className="bg-gradient-to-br w-full h-fit from-black to-black/70 text-white p-5 rounded-xl flex items-center gap-5 justify-center">
                        <span className="text-xs">Check More</span>
                        <Image src={'/svg/next.svg'} alt="" width={15} height={15} className="fill-white" />
                    </button>
                </div>
            </div>
        </Reveal>
    )
}