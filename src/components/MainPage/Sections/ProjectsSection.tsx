'use client'
import Image from "next/image"
import { ProjectsCard } from "../Elements/ProjectsCard"
import { ProjectsData } from "../constant"
import { useState } from "react";

export const ProjectsSection: React.FC = () => {
    const [data, setData] = useState(ProjectsData.slice(0, 2));
    const [isShowMore, setIsShowMore] = useState(true);

    return (
        <section className="min-h-screen p-10 lg:p-40 flex flex-col gap-5" id="projects">
            <div className="flex flex-col gap-5">
                <h1 className="text-xl lg:text-4xl font-bold" id="about-me">💻 Projects</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-myGrid gap-10">
                {
                    data.map(item => <ProjectsCard data={item} key={item.name}/>)
                }
            </div>
            <span className="text-center text-sm font-semibold" onClick={() => {
                if (isShowMore) {
                    setData(ProjectsData);
                    setIsShowMore(false);
                }
                else {
                    setData(ProjectsData.slice(0, 2))
                    setIsShowMore(true);
                }
            }}>
                💨 {isShowMore ? "Show more" : "Show less"}
            </span>
        </section>
    )
}