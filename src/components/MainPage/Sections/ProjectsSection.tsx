'use client'
import { ProjectsCard } from "../Elements/ProjectsCard"
import { ProjectsData } from "../constant"
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../../Template/SectionTitle";
import { Reveal } from "../util/Reveal";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";

import { scroller } from "react-scroll"
import { Section } from "@/components/Template/Section";


export const ProjectsSection: React.FC = () => {
    const [data, setData] = useState(ProjectsData.slice(0, 3));
    const [isShowMore, setIsShowMore] = useState(true);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (!isShowMore) {
            mainControls.start('visible')
        }
        else {
            mainControls.start('hidden')
        }
    }, [isShowMore])

    return (
        <Section id="projects">
            <SectionTitle>
                Projects
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <AnimatePresence>
                    {
                        data.map(item => <ProjectsCard data={item} key={item.name} />)
                    }
                </AnimatePresence>
            </div>
            <Reveal className="flex justify-center">
                <span className="cursor-pointer text-center text-sm font-semibold text-white underline underline-offset-8" onClick={() => {
                    if (isShowMore) {
                        setData(ProjectsData);
                        setIsShowMore(false);
                    }
                    else {
                        setData(ProjectsData.slice(0, 3))
                        setIsShowMore(true);
                    }
                }}>
                    {isShowMore ? "Show more" : "Show less"}
                </span>
            </Reveal>
        </Section>
    )
}