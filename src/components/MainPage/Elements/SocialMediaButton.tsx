import Image from "next/image"
import Link from "next/link"
import { socialMediaButtonInterface } from "./interface"
import { CustomAnimation } from "../util/CustomAnimation"

export const SocialMediaButton: React.FC<socialMediaButtonInterface> = ({ socialMedia }) => {
    return (
        <CustomAnimation
            variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1
                }
            }}
        >
            <Link href={socialMedia.link} target="_blank" className="w-fit">
                <button className="flex w-fit gap-5 font-semibold justify-start text-sm items-center p-3 lg:p-5 duration-100 hover:scale-110" >
                    <Image src={`svg/${socialMedia.name}.svg`} alt="" width={20} height={20} className="w-5" />
                    <span className="">
                        {
                            socialMedia.name
                        }
                    </span>
                </button>
            </Link>
        </CustomAnimation>
    )
}