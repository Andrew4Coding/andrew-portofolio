'use client'
import { CarouselCard } from "../Elements/CarouselCard"
import { AboutMeImage } from "../constant"
import { CustomCarousel } from "../util/Carousel"
import { Reveal } from "../util/Reveal"
import { SeeCursorAnimation } from "../util/SeeCursor"

export const AboutMeSection: React.FC = () => {
    return (
        <Reveal>

            <section className="h-screen p-10 lg:p-40 flex flex-col gap-5" id='about-me'>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl lg:text-4xl font-bold">🙋‍♂️ About Me</h1>
                    <p className="leading-loose text-sm lg:text-md text-[#54555F]">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <CustomCarousel>
                    {
                        AboutMeImage.map(({text, image}) => {
                            return (
                                <CarouselCard text={text} image={image} key={text}/>
                            )
                        })
                    }
                </CustomCarousel>
            </section>
        </Reveal>
    )
}