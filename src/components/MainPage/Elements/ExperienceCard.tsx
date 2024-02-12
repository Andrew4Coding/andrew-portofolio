'use client'
import Image from "next/image"
import { experienceCardInterface } from "./interface"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import { Reveal } from "../util/Reveal"

export const ExperienceCard: React.FC<experienceCardInterface> = ({
    item
}) => {

    return (
        <Reveal>
            <AccordionItem className="bg-white h-fit p-7 lg:p-10 rounded-xl">
                {
                    ({ isExpanded }) => (
                        <>
                            <AccordionButton>
                                <div className="flex gap-5 w-full">
                                    <Image src={`/exp-images/${item.companyLogo}`} alt="" width={50} height={50} className="object-contain w-[2rem] md:min-w-[3rem] drop-shadow-glow" />
                                    <div className="flex flex-col items-start flex-grow text-left">
                                        <h2 className="font-bold text-sm lg:text-lg text-left">
                                            {
                                                item.title
                                            }
                                        </h2>
                                        <h3 className="font-semibold text-xs lg:text-sm">
                                            {
                                                item.description
                                            }
                                        </h3>
                                        <h4 className="text-xs font-medium">
                                            {
                                                item.date
                                            }
                                        </h4>
                                    </div>
                                    <Image src={`/svg/chevron_right.svg`} alt="" width={30} height={30} className={`duration-200 ${!isExpanded ? 'rotate-90' : '-rotate-90'}`} />

                                </div>
                            </AccordionButton>
                            <AccordionPanel pb={4} pt={20}>
                                <div className="pl-5">
                                    <ul className="text-xs leading-loose list-disc" style={{}}>
                                        {
                                            item.details.map((item, index) => {
                                                return (
                                                    <li className="" key={index}>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </AccordionPanel>
                        </>
                    )
                }
            </AccordionItem>
        </Reveal>
    )
}