'use client'
import Image from "next/image"
import { SocialMediaButton } from "../Elements/SocialMediaButton"

import { motion } from 'framer-motion'

import { socialData } from "../constant"
import { CustomAnimation } from "../util/CustomAnimation"
import { Section } from "@/components/Template/Section"
import Link from "next/link"


export const WelcomeSection: React.FC = () => {
    function downloadCV() {
        console.log("Hello")

        const url = 'http://localhost:3000/next.svg';

        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'My CV')
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <Section id="welcome" className="text-white items-center justify-center">
            <Image src={'/images/me.jpg'} alt="" width={100} height={100} className="object-cover w-28 aspect-square shadow- rounded-full object-center duration-100 hover:scale-110"></Image>

            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left">Hello! It's me</h1>
            <h1 className="bg-gradient-to-b from-[#86A7FC] to-[#4FC3F6] inline-block text-transparent bg-clip-text
                            font-bold text-4xl md:text-5xl lg:text-6xl text-center  ">Andrew Devito Aryo</h1>

            <p className="text-sm max-w-[30rem] text-white leading-loose md:leading-9 text-center">
                Undergraduate Computer Science Student at University of Indonesia | Interested in Website and Mobile Development
            </p>
            <Link href={""}>
                <motion.button
                    onClick={() => {
                        const url = 'https://andrew-portofolio.vercel.app/CV.pdf';

                        const aTag = document.createElement('a');
                        aTag.href = url;
                        aTag.setAttribute('download', 'My CV')
                        document.body.appendChild(aTag);
                        aTag.click();
                        aTag.remove();
                    }}
                    whileTap={{ scale: 0.90 }}
                    className="bg-white p-4 lg:p-5 px-10 rounded-xl flex justify-center gap-5 w-full lg:max-w-[30rem] duration-100 hover:scale-105">
                    <Image src={'/svg/download.svg'} alt="" width={20} height={20} className="fill-black" />
                    <span className="font-semibold text-black text-sm">Download CV</span>
                </motion.button>
            </Link>

            <CustomAnimation variants={{
                hidden: { opacity: 1, scale: 0 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.2
                    }
                }
            }}
                clasName="grid grid-cols-2 md:flex w-fit md:w-full justify-between lg:flex lg:w-fit gap-5 lg:gap-10">
                {
                    socialData.map((socialMedia) => <SocialMediaButton socialMedia={socialMedia} key={socialMedia.name} />)
                }
            </CustomAnimation>
        </Section>
    )
}