'use client'
import Image from "next/image"
import { SocialMediaButton } from "../Elements/SocialMediaButton"

import { motion, useInView } from 'framer-motion'

import { socialData } from "../constant"
import { Reveal } from "../util/Reveal"

export const WelcomeSection: React.FC = () => {
    return (
        <section className="flex" id='welcome'>
            <div
                className="h-screen p-10 lg:p-40 flex items-center">
                
                <Reveal>
                    <div className="flex flex-col gap-5 lg:gap-5 text-white">
                        <div className="flex justify-center lg:hidden">
                            <Image src={'/images/me.jpg'} alt="" width={100} height={100} className="object-cover w-28 h-28 shadow- rounded-full object-center"></Image>
                        </div>

                        <h1 className="text-xl lg:text-4xl font-bold text-center lg:text-left">Hello! It's me</h1>
                        <h1 className="bg-gradient-to-b from-[#86A7FC] to-[#4FC3F6] inline-block text-transparent bg-clip-text
                        font-bold text-4xl lg:text-7xl text-center lg:text-left ">Andrew Devito Aryo</h1>

                        <p className="text-sm lg:text-md text-white leading-loose text-center lg:text-left">
                            Undergraduate Computer Science Student at University of Indonesia | Interested in Website and Mobile Development
                        </p>

                        <motion.button 
                        whileTap={{scale: 0.90}}
                        className="bg-white p-4 lg:p-5 px-10 rounded-xl flex justify-center gap-5 w-full lg:w-fit duration-100 hover:scale-105">
                            <Image src={'/svg/download.svg'} alt="" width={20} height={20} className="fill-black" />
                            <span className="font-semibold text-black text-sm">Download CV</span>
                        </motion.button>

                        <div className="grid grid-cols-2 lg:flex gap-5 lg:gap-10">
                            {
                                socialData.map((socialMedia) => <SocialMediaButton socialMedia={socialMedia} key={socialMedia.name} />)
                            }
                        </div>

                    </div>
                </Reveal>
                
            </div>
            <div className="h-screen hidden xl:flex">
                <Image src={'/images/welcome.jpg'} alt="" width={430} height={200} className="h-screen object-cover" />
            </div>
        </section>
    )
}