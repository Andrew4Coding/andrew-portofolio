'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Link } from 'react-scroll';

const navItems = ["About", "Experience", "Projects"];

export default function Navbar() {
    const [underlineVisible, setUnderlineVisible] = useState(false);

    const handleTextAnimationComplete = () => {
        setUnderlineVisible(true);
    };

    return (
        <nav className="mx-10 lg:mx-32 flex items-center gap-16 text-white">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 0 }}
                initial={{ opacity: 0, y: -20, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 360 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                whileTap={{ scale: 1.1, rotate: 0 }}

            >
                <Image
                    src={"/icon.png"}
                    alt="Main Logo"
                    width={90}
                    height={90}
                    className="w-10 ease-in-out"
                />
            </motion.div>
            <span className="hidden lg:flex gap-16 list-none font-bold">
                <AnimatePresence>
                    {
                        navItems.map((item, index) => (
                            <Link
                                key={index}
                                activeClass="active"
                                to={item.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="group transition duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onAnimationComplete={handleTextAnimationComplete}
                                >
                                    {item}
                                    {underlineVisible && (
                                        <motion.span
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            exit={{ scaleX: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"
                                        />
                                    )}
                                </motion.li>
                            </Link>
                        ))
                    }
                </AnimatePresence>
            </span>
        </nav>
    )
}
