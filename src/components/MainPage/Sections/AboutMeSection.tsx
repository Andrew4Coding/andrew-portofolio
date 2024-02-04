'use client'
import { CarouselCard } from "../Elements/CarouselCard"
import { SectionTitle } from "../Elements/SectionTitle"
import { AboutMeImage } from "../constant"
import { CustomCarousel } from "../util/Carousel"
import { Reveal } from "../util/Reveal"

export const AboutMeSection: React.FC = () => {
    return (
            <section className="h-screen p-10 lg:p-40 flex flex-col gap-5" id='about-me'>
                <SectionTitle> About Me </SectionTitle>
                <Reveal className="flex flex-col gap-5 flex-grow">
                    <div className="leading-loose text-xs lg:text-md text-[#f1f1f1] flex-grow">
                    Andrew is a first-year Computer Science student at the University of Indonesia. He has a keen interest in technology, particularly in Website Development, Mobile Development, and UI/UX. Andrew is dedicated to enhancing both his hard and soft skills during his studies at the University of Indonesia. Previously, Andrew served as the PMB Coordinator for CS UI 23, demonstrating excellent collaboration, management, and communication skills. Andrew successfully completed the first semester with a commendable academic performance.
                    </div>
                    <CustomCarousel className="w-full h-full flex gap-5 overflow-x-scroll">
                        {
                            AboutMeImage.map(({ text, image }, index) => {
                                return (
                                    <CarouselCard text={text} image={image} key={index} />
                                )
                            })
                        }
                    </CustomCarousel>
                </Reveal>
            </section>
    )
}