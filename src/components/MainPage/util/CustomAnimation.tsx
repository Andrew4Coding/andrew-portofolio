import { MotionProps, MotionStyle, Variants, motion } from 'framer-motion';

interface customAnimationInterface {
    children?: React.ReactNode,
    variants: Variants
    clasName?: string,
}

export const CustomAnimation: React.FC<customAnimationInterface> = ({
    children,
    variants,
    clasName
}) => {
    return (
        <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
            duration: 0.5,
            delay: 0.5,
        }}

        className={clasName}
        >
            { children }

        </motion.div>
    )
}