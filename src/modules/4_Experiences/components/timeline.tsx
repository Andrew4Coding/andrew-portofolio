'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "../constant";

export default function Timeline() {
    return (
        <div className='flex flex-col gap-10'>
            {experiences.map((item, index) => {
                return (
                    <motion.div
                        key={index}
                        className='flex gap-10 items-center cursor-pointer w-fit'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }} // Adjust the initial animation duration here
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Adjust the hover animation duration here
                        whileTap={{ scale: 0.95, transition: { duration: 0.2 } }} // Adjust the tap animation duration here
                    >
                        <div
                            className='min-w-14 h-14 bg-white rounded-full flex items-center justify-center'
                        >
                            <Image
                                src={`/experiences/${item.image}`}
                                alt={item.title}
                                objectFit='contain'
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                        </div>
                        <div className='flex flex-col gap-2 text-white'>
                            <p className='text-xs lg:text-sm font-medium'>{item.date}</p>
                            <div className='flex flex-col lg:flex-row gap-2'>
                                <h2 className='text-xl font-extrabold'>{item.title}</h2>
                                <p className="hidden lg:flex">-</p>
                                <h2 className='text-sm lg:text-xl font-bold'>{item.company}</h2>
                            </div>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    );
}
