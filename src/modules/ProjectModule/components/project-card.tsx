import Image from "next/image"
import { projectDataProps } from "../constant"

export const ProjectCard: React.FC<projectDataProps> = ({ 
    title,
    description,
    image,
    projectLink,
 }) => {
    return (
        <a href={projectLink ?? ""} target="_blank">
            <div className="bg-black/20 text-white p-8 flex flex-col gap-4 font-manrope hover:bg-[#F9F9FF] duration-300 hover:shadow-sm rounded-xl hover:scale-105 hover:text-black h-full">
                <Image
                    src={`/project-images/${image}`}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full rounded-md"
                />
                <h3 className="font-bold text-xl">{ title }</h3>
                <p className="font-medium text-sm leading-loose">{description}</p>
            </div>
        </a>
    )
}