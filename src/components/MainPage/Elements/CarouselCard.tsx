'use client'
import { Tooltip } from "@chakra-ui/react"
import Image from "next/image"
import { carouselCardInterface } from "./interface"
import { useState } from "react"

import {AnimatePresence, motion} from 'framer-motion'

export const CarouselCard: React.FC<carouselCardInterface> = ({ text, image }) => {
    const [isClick, setIsClick] = useState(false)

    return (
        <Tooltip label={text} placement="bottom" bg={'black'} key={''} color={'white'} hasArrow margin={10} padding={10} fontSize={12} rounded={10}>
            <div className="min-w-full lg:min-w-[20%] wh-full bg-white/30 shadow-md rounded-xl relative" onClick={() => {
                setIsClick(!isClick);
            }}>
                <AnimatePresence>
                    {
                        isClick && (
                            <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            exit={{opacity: 0}}
                            className="lg:hidden flex items-end p-10 w-full bg-gradient-to-b from-black/0 to-black/100 h-full  absolute z-200">
                                <p className="text-white">
                                    {text}
                                </p>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                <div className="h-full">
                    <Image src={`/aboutme-images/${image}`} alt="" width={200} height={200} className="w-full h-full object-cover rounded-xl" />
                </div>
                
            </div>
        </Tooltip>
    )
}