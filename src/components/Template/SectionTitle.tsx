'use client'
import { sectionTitleInterface } from "../MainPage/Elements/interface"
import { Reveal } from "../MainPage/util/Reveal";


export const SectionTitle: React.FC<sectionTitleInterface> = ({
    children
}) => {
    return (
        <Reveal className="text-3xl text-white lg:text-4xl font-bold w-fit pb-3 underline underline-offset-[1rem]">
            {children}
        </Reveal>
    )
}