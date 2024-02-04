'use client'
import Image from "next/image"
import { ProjectsCard } from "../Elements/ProjectsCard"
import { ProjectsData } from "../constant"
import { useState } from "react";
import { SectionTitle } from "../Elements/SectionTitle";
import { Reveal } from "../util/Reveal";

export const ProjectsSection: React.FC = () => {
    const [data, setData] = useState(ProjectsData.slice(0, 2));
    const [isShowMore, setIsShowMore] = useState(true);

    return (
        <section className="min-h-screen p-10 lg:p-40 flex flex-col gap-5" id="projects">
            <SectionTitle>
                Projects
            </SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-myGrid gap-10">
                {
                    data.map(item => <ProjectsCard data={item} key={item.name}/>)
                }
            </div>
            <Reveal className="flex justify-center">
                <span className="text-center text-sm font-semibold text-white underline underline-offset-8" onClick={() => {
                    if (isShowMore) {
                        setData(ProjectsData);
                        setIsShowMore(false);
                    }
                    else {
                        setData(ProjectsData.slice(0, 2))
                        setIsShowMore(true);
                    }
                }}>
                    {isShowMore ? "Show more" : "Show less"}
                </span>
            </Reveal>
        </section>
    )
}