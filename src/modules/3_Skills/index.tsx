'use client'
import { titleVariants } from '@/utils/animation-variants';
import { motion } from 'framer-motion';
import { SkillProps, SKILLS } from './constant';
import Image from 'next/image';

const SkillChip = ({ name, image, link }: SkillProps) => { 
    return (
        <motion.li
            whileHover={{ scale: 1.1, rotate: 20, shadow: '0px 0px 8px rgba(255,255,255,1)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            onClick={() => window.open(link, '_blank')}
            className='bg-white text-white w-20 h-20 flex items-center justify-center p-5 rounded-full'>
            <Image
                src={'/skills/' + image}
                alt={name}
                width={50}
                height={50}
            />
        </motion.li>
    )

}

export function SkillsModule() {
    return (
        <section id="skills" className="px-10 lg:px-32 flex flex-col gap-4">
            <motion.h2
                variants={titleVariants}
                whileHover="hover"
                className="font-extrabold text-3xl lg:text-5xl text-white">skills</motion.h2>
            <div className='carousel-container'>
                <ul className='py-10'>
                    {
                        SKILLS.map((item, index) => {
                            return (
                                <SkillChip key={index} {...item} />
                            )
                        })
                    }
                </ul>
                <ul aria-hidden className='py-10'>
                    {
                        SKILLS.map((item, index) => {
                            return (
                                <SkillChip key={index} {...item} />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}