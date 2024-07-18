'use client'
import { titleVariants } from "@/utils/animation-variants";
import { ProjectCard } from "./components/project-card";
import { projectsData } from "./constant";
import {motion} from 'framer-motion';

export function ProjectsModule() {
    return (
        <section id="projects" className="px-10 lg:px-32 py-16 flex flex-col gap-4">
            <motion.h2
                variants={titleVariants}
                whileHover="hover"
                className="font-extrabold text-3xl lg:text-5xl text-white">my works</motion.h2>
            <div className="w-fit lg:w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    projectsData.map((item, index) => (
                        <ProjectCard
                            key={index}
                            {...item}
                        />
                    ))
                }
            </div>
        </section>
    );
}