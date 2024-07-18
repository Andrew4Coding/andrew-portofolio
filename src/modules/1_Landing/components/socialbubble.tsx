import { delay, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const SocialBubble: React.FC<{
    image: string,
    delay: number,
    classNameContainer?: string,
    classNameChild?: string,
    link: string,
}> = ({
    image,
    delay,
    classNameContainer,
    classNameChild,
    link
}) => {
        return (
            <Link href={link} target="_blank">
                <motion.button
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        delay: delay
                    }}
                    whileTap={{
                        scale: 0.9
                    }}
                    className={`absolute ${classNameContainer}`}>
                    <Image src={`/socialmedia-buttons/${image}`} alt="" width={50} height={50} className={`duration-200 hover:drop-shadow-glow hover:scale-110 ${classNameChild}`} />
                </motion.button>
            </Link>
        )
    }