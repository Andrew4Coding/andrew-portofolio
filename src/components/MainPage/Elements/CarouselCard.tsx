'use client'
import Image from "next/image"
import { carouselCardInterface } from "./interface"
import { useState } from "react"


import { AnimatePresence, motion } from 'framer-motion'

export const CarouselCard: React.FC<carouselCardInterface> = ({ text, image }) => {
    const [isClick, setIsClick] = useState(false);
    const [toolTipVisible, setToolTipVisible] = useState(false);

    return (
        <div 
        className="min-w-full mb-5 lg:min-w-[20%] bg-white/30 shadow-md rounded-xl relative" 
        
        onClick={() => {
            setIsClick(!isClick);
        }}
        
        onMouseEnter={() => {
            setIsClick(true);
        }}

        onMouseLeave={() => {
            setIsClick(false);
        }}
        >
            <Image src={`/aboutme-images/${image}`} alt="" layout="fill" objectFit="cover" objectPosition="center" className="z-0 rounded-md" />
            <AnimatePresence>
                {
                    isClick && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="lg:hidden flex items-end p-10 w-full bg-gradient-to-b from-black/0 to-black/100 h-full text-xs leading-loose absolute z-200">
                            <p className="text-white">
                                {text}
                            </p>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </div>
    )
}