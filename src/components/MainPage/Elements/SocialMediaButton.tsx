import Image from "next/image"
import Link from "next/link"
import { socialMediaButtonInterface } from "./interface"

export const SocialMediaButton: React.FC<socialMediaButtonInterface> = ({ socialMedia }) => {
    return (
        <Link href={socialMedia.link} target="_blank">
            <button className="flex w-full gap-5 font-semibold justify-start text-sm items-center p-3 lg:p-5 duration-100 hover:scale-110" >
                <Image src={`svg/${socialMedia.name}.svg`} alt="" width={20} height={20} className="w-5 lg:w-8" />
                <span className="">
                    {
                        socialMedia.name
                    }
                </span>
            </button>
        </Link>
    )
}