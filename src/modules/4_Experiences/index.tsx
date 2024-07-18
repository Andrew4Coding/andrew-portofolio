'use client'
import { titleVariants } from "@/utils/animation-variants";
import Timeline from "./components/timeline";
import { motion } from 'framer-motion';

export default function ExperienceModule() {
    return (
        <section id="experience" className="px-10 lg:px-32 py-20 bg-black/20 text-white flex flex-col gap-10">
            <motion.h2
                variants={titleVariants}
                whileHover="hover"
                className="font-extrabold text-3xl lg:text-5xl">experience</motion.h2>
            <Timeline />
        </section>
    )
}