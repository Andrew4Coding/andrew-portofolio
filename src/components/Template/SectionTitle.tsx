'use client'
import { useEffect, useRef } from "react";
import { sectionTitleInterface } from "../MainPage/Elements/interface"
import { motion, useAnimation, useInView } from 'framer-motion'
import { TypingAnimation } from "../MainPage/util/TypingAnimation";


export const SectionTitle: React.FC<sectionTitleInterface> = ({
    children
}) => {
    return (
        <TypingAnimation text={children} className="text-3xl text-white lg:text-4xl font-bold w-fit pb-3 underline underline-offset-[1rem]"/>
    )
}