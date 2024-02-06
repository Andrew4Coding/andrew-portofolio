'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react';

interface typingAnimationInterface {
    text: string,
    className?: string,
}

export const TypingAnimation: React.FC<typingAnimationInterface> = ( {text, className} ) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    })

    const animationVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    return (
        <motion.div 
        ref={ref}
        initial="hidden"
        animate={mainControls}
        
        transition={{staggerChildren: 0.005}}

        className={className}>
            {
                text.split("").map(char => (
                    <motion.span variants={animationVariant}>
                        {char}
                    </motion.span>
                ))
            }
        </motion.div>
    )
}