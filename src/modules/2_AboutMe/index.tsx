'use client'
import { titleVariants } from '@/utils/animation-variants';
import { Reveal } from '@/utils/reveal';
import { motion } from 'framer-motion';

export default function AboutMeModule() {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.2,
            },
        },
    };

    return (
        <motion.section
            id='about'
            className="px-10 lg:px-32 py-10 lg:py-20 bg-black/20 text-white flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2
                className="font-extrabold text-3xl lg:text-5xl"
                variants={titleVariants}
                whileHover="hover"
            >
                about me
            </motion.h2>
            <motion.p
                className="font-semibold leading-loose text-base"
            >
                Andrew is a second-year Computer Science student at the University of Indonesia. He is keenly interested in technology, particularly in Software Engineering and Data Science. Andrew is dedicated to enhancing both his hard and soft skills during his studies at the University of Indonesia. Previously, Andrew served as the PMB Coordinator for CS UI 23, demonstrating excellent collaboration, management, and communication skills. Andrew completed the first year with a commendable academic performance.
            </motion.p>
        </motion.section>
    );
}
