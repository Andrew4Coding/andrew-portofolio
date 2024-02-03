import React, { useState } from "react"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { carouselInterface } from './interface';


export const CustomCarousel: React.FC<carouselInterface> = ({ children }) => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <div className="w-full h-full flex gap-5 overflow-x-scroll p-5">
            {children}
        </div>
    )
}