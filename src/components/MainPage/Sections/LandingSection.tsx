'use client'
import { Section } from "@/components/Template/Section"
import Image from "next/image"

import { motion } from "framer-motion"

import { TypeAnimation } from 'react-type-animation';
import { SocialBubble } from "../Elements/SocialBubble";

import { Link } from "react-scroll";


export const LandingSection: React.FC = () => {
    const downloadCV = () => {
        const url = 'http://localhost:3000/CV.pdf';

        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'My CV')
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <Section id="welcome" className="flex flex-col-reverse md:flex-row items-center justify-center">
            <motion.div
                variants={{
                    hidden: { y: 75, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                }}

                initial="hidden"
                animate="visible"

                transition={{
                    delay: 0.25
                }}

                className="flex flex-col text-white w-full">
                <TypeAnimation
                    className="text-sm md:text-xl"
                    sequence={['Hello, Internet!']}
                    wrapper="span"
                    cursor={false}
                />
                <span className="font-semibold text-[#95979D] text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
                    I am
                    <span className="font-bold ml-2 text-white drop-shadow-glow">
                        Andrew Devito Aryo
                    </span>
                    , A
                    <TypeAnimation
                        className="font-bold ml-2 text-white"
                        sequence={[
                            'Full Stack Developer',
                            6500,
                            'Computer Science Student',
                            6000,
                            'Mobile Developer',
                            6000,
                            'Website Developer',
                            6000
                        ]}
                        repeat={Infinity}
                        wrapper="span"
                        speed={30}
                    />
                </span>
                <div className="w-full grid grid-cols-2 gap-2 lg:gap-5 mt-5 h-fit text-sm">
                    <Link
                    key={'about'}
                    activeClass="active"
                    to={'about'}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                        <motion.button
                            whileTap={{
                                scale: 0.9
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            className="p-3 items-center bg-white rounded-xl text-black font-normal w-full flex gap-3 justify-center duration-100 hover:scale-[103%]">
                            <span className="text-xs">About me</span>
                            <Image src={'/svg/chevron_right.svg'} alt="" width={15} height={15} className="fill-white" />
                        </motion.button>
                    </Link>
                    <motion.button
                        whileTap={{
                            scale: 0.9
                        }}
                        whileHover={{
                            scale: 1.05
                        }}
                        onClick={downloadCV}
                        className="p-2 bg-gradient-to-br from-[#0093E9] to-[#21A2E0] items-center rounded-xl font-normal w-full flex gap-3 justify-center duration-100 hover:scale-[103%]">
                        <span className="text-xs">Download CV</span>
                        <Image src={'/svg/download.svg'} alt="" width={15} height={15} className="fill-white" />
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                transition={{
                    delay: 0.25
                }}
                initial={{ y: 75, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative">
                <div className="z-50">
                    <SocialBubble
                        image="linkedin_button.svg"
                        delay={0.5}
                        classNameContainer="bottom-10 right-10"
                        classNameChild="w-16 sm:w-24 md:w-12 lg:w-32 xl:w-36"
                        link="https://www.linkedin.com/in/andrewaryo"
                    />

                    <SocialBubble
                        image="instagram_button.svg"
                        delay={0.6}
                        classNameContainer="left-10 top-10"
                        classNameChild="w-12 sm:w-20 md:w-12 lg:w-20"
                        link="https://www.instagram.com/and_ryo02/"
                    />

                    <SocialBubble
                        image="github_button.svg"
                        delay={0.7}
                        classNameContainer="left-5 bottom-20"
                        classNameChild="w-12 sm:w-20 md:w-12 lg:w-20"
                        link="https://github.com/Andrew4Coding"
                    />

                    <SocialBubble
                        image="twitter_button.svg"
                        delay={0.8}
                        classNameContainer="right-0 top-28"
                        classNameChild="w-12 sm:w-20 md:w-12 lg:w-20"
                        link=""
                    />
                </div>

                <Image src={'/images/intersect.png'} alt="" width={1000} height={1000} className="w-full max-w-[400px] md:max-w-[450px] lg:min-w-[500px] -z-10" />
            </motion.div>
        </Section>
    )
}