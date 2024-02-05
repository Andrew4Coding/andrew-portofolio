'use client'

import { useEffect, useRef } from "react";
import { revealInterface } from "./interface"
import { useInView, motion, useAnimation } from "framer-motion";

export const Reveal: React.FC<revealInterface> = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    })

    return (
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                exit={{opacity: 0, y: -75, transition: {duration: 1}}}
                transition={{
                    duration: 0.5,
                    delay: 0.25,
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                }}
                className={className}
                ref={ref}
            >
                {children}
            </motion.div>
    )
}

export const ParentAnimation = {
    variants: {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    }
}