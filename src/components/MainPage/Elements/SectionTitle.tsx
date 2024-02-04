'use client'
import { useEffect, useRef } from "react";
import { sectionTitleInterface } from "./interface"
import { motion, useAnimation, useInView } from 'framer-motion'


export const SectionTitle: React.FC<sectionTitleInterface> = ({
    children
}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
        else {
            mainControls.start('hidden')
        }
    })

    return (
        <motion.span
            variants={{
                hidden: { opacity: 0, y: 60},
                visible: { opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, ease: "easeInOut", damping: 0.3, }}
            className="text-3xl text-white lg:text-4xl font-bold w-fit pb-3 underline underline-offset-[1rem]" ref={ref}>
            {children}
        </motion.span>
    )
}