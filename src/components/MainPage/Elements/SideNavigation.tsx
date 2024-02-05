'use client'
import { Tooltip } from "@chakra-ui/react"
import { Link } from 'react-scroll'
import { sectionData } from "../constant"


export const SidebarNavigation: React.FC = () => {
    return (
        <div className="fixed w-full lg:w-fit lg:h-full bottom-0 lg:left-0 flex items-center p-5">
            <div className="bg-[#F1F1F1] lg:min-h-50 w-full p-5 lg:py-10 flex flex-row lg:flex-col gap-2 lg:gap-5 rounded-xl justify-around">
                {
                    sectionData.map(({ logo, name, id }) => {
                        return (
                            <Link
                                key={id}
                                activeClass="active"
                                to={id}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500} >
                                <Tooltip label={name} placement="right" key={name}>
                                    <button className="duration-100 hover:scale-125 text-lg bg-[#E1E1E1] p-2 w-14 h-14 rounded-full">
                                        {
                                            logo
                                        }
                                    </button>
                                </Tooltip>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}