import Image from "next/image"
import { SKILLS_ARRAY } from "../constant"

export const SkillSlider = () => {
    return (
        // Slider
        <div className="slider py-2">
            {/* Slider Track */}
            <div className="flex slider-track">
                {
                    [1, 2, 3, 4].map(() => {
                        return (
                            SKILLS_ARRAY.map((skill, index) => {
                                return (
                                    <Image
                                        src={`/skills/${skill}.svg`}
                                        alt={skill}
                                        width={100}
                                        height={100}
                                        key={index}
                                        className={`w-12 duration-300 ease-in-out slider-item hover:scale-110 hover:rotate-12`}
                                    />
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    )
}
