'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    '/gathering.JPG',
    '/gathering.JPG',
    '/gathering.JPG',
    '/gathering.JPG'
];

export default function ImageCarousel() {
    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ left: -200 * (images.length - 1), right: 0 }}
            >
                {images.map((src, index) => (
                    <motion.div key={index} className="w-96 flex-shrink-0 p-2">
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
