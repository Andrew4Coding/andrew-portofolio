'use client'

import Button from "@/components/button";
import { motion } from 'framer-motion';
import { Download } from "lucide-react";
import Image from "next/image";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { SocialBubble } from './components/socialbubble';

const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export default function LandingModule() {
    const [text] = useTypewriter({
        words: ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Problem Solver'],
        loop: 0, // Infinite loop
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 8000,
    });

    return (
        <section className="px-10 lg:px-32 w-full h-fit flex flex-col lg:flex-row-reverse gap-10">
            <div
                className="w-full flex justify-center"
            >
                <motion.div
                    className="relative w-fit lg:w-full flex flex-col justify-center items-center"
                >
                    <div className="z-50">
                        <SocialBubble
                            image="linkedin.svg"
                            delay={0.5}
                            classNameContainer="bottom-5 right-5 sm:right-20 lg:right-5"
                            classNameChild="w-24 lg:w-32 xl:w-36"
                            link="https://www.linkedin.com/in/andrewaryo"
                        />

                        <SocialBubble
                            image="instagram.svg"
                            delay={0.6}
                            classNameContainer="left-10 top-10 sm:left-20 lg:left-10"
                            classNameChild="w-12 sm:w-16 lg:w-20"
                            link="https://www.instagram.com/and_ryo02/"
                        />

                        <SocialBubble
                            image="github.svg"
                            delay={0.7}
                            classNameContainer="left-10 bottom-14 sm:left-20 lg:left-10"
                            classNameChild="w-12 sm:w-16 lg:w-20"
                            link="https://github.com/Andrew4Coding"
                        />

                        <SocialBubble
                            image="twitter.svg"
                            delay={0.8}
                            classNameContainer="right-10 top-14 sm:right-20 lg:right-10"
                            classNameChild="w-12 sm:w-16 lg:w-20"
                            link="https://twitter.com/andrewryo02"
                        />
                    </div>
                    <Image
                        src={'/profile-image.png'}
                        alt="Profile Image"
                        width={500}
                        height={500}
                        className="max-h-[20rem] md:max-h-[23rem] lg:max-h-full object-contain"
                    />
                </motion.div>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full flex flex-col gap-6 justify-center text-white"
            >
                <motion.h3
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                    className="text-xl lg:text-4xl font-semibold"
                >
                    Hello Internet!
                </motion.h3>
                <motion.h3
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="leading-tight text-4xl lg:text-6xl font-semibold text-[#ABABAB]"
                >
                    {"I'm "}
                    <motion.b
                        variants={textVariants}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-white glowing-text"
                    >
                        Andrew Devito Aryo
                    </motion.b>
                    {" a "}
                    <motion.b
                        variants={textVariants}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="text-white font-extrabold glowing-text"
                    >
                        {text}
                        <Cursor />
                    </motion.b>
                </motion.h3>
                <motion.div
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex flex-col lg:flex-row gap-5 w-full"
                >
                    <a href="/cv.pdf" download="My_CV.pdf">
                        <Button
                            variant="secondary"
                            className="text-black w-full sm:w-fit"
                        >
                            <span>view resume</span>
                            <Download className="w-4" />
                        </Button>
                    </a>
                </motion.div>
            </motion.div>

            
        </section>
    )
}
