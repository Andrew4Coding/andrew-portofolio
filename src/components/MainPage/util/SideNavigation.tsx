'use client'
import { Link } from 'react-scroll'
import { sectionData } from "../constant"
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useState } from 'react'

export const SidebarNavigation: React.FC = () => {
    const [offset, setOffset] = useState(50);
    
    return (
        <div 
        className="hidden lg:flex fixed w-full lg:w-fit lg:h-full bottom-0 lg:left-0 items-center">
            <motion.div 
            variants={{
                hidden: {
                    x: -100
                },
                visible: {
                    x: 0
                }
            }}
    
            transition={{
                staggerChildren: 0.2,
                delayChildren: 0.2
            }}
    
            initial="hidden"
            animate="visible"
            className="bg-white/20 lg:min-h-50 w-full p-5 lg:py-10 flex flex-row lg:flex-col gap-2 lg:gap-5 rounded-e-xl justify-around">
                {
                    sectionData.map(({ logo, name, id }) => {
                        return (
                                <Link
                                    key={id}
                                    activeClass="active"
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500} >
                                        
                                    <button className="duration-100 hover:scale-110 bg-[#121212] w-14 flex justify-center items-center h-14 rounded-full">
                                        <Image src={`/side-nav-svg/${logo}`} alt='' width={20} height={20} className=''/>
                                    </button>
                                </Link>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}