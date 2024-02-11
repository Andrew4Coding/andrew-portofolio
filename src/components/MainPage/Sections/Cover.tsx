'use client'
import { motion } from "framer-motion" 

export const Cover = () => {
    return (
        <motion.section 
        initial={{opacity: 1}}
        animate={{opacity: 0, visibility: "hidden"}}
        transition={{duration: 0.5}}
        className="fixed z-50 bg-black w-screen h-screen top-0">
        </motion.section>
    )
}