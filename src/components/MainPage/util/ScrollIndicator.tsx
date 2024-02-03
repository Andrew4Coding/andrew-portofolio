'use client'
import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollIndicator: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{scaleX}}
            className={`bg-gradient-to-br from-[#86A7FC] to-[#4FC3F6] fixed w-full h-1.5 z-200 rounded-e-full`} />
    )
}