'use client'
import { Tab } from '@headlessui/react'
import { mySkills } from '../constant'
import { useState } from 'react'
import Image from 'next/image'
import { Reveal } from '../util/Reveal'

export const SkillsSection: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <section className="min-h-screen p-10 lg:p-40 flex flex-col gap-5" id="skills">
            <Reveal>
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl lg:text-4xl font-bold mb-5" id="about-me">🤹️ Skills</h1>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <Tab.Group>
                        <Tab.List className='grid grid-cols-3 lg:flex gap-2 lg:gap-10'>
                            {
                                mySkills.map(({ tabName }, index) => {
                                    return (
                                        <Tab key={index} className={`${index == selectedTab && 'bg-black text-white '} p-2 py-3 lg:p-5 text-xs duration-100 hover:scale-105`}
                                            onClick={() => { setSelectedTab(index) }}
                                        >{tabName}</Tab>
                                    )
                                })
                            }
                        </Tab.List>
                        <Tab.Panels className='flex w-full'>
                            {
                                mySkills.map((item, index) => {
                                    return (
                                        <Tab.Panel className='w-full bg-white/20 shadow-lg rounded-lg flex duration-1000 hover:scale-105' key={index}>
                                            <article className='grid grid-cols-2 lg:grid-cols-4 w-full gap-5 lg:gap-10'>
                                                {
                                                    item.skills.map(({name, image}) => {
                                                        return (
                                                            <div className='p-5 lg:p-10 flex flex-col gap-5 items-center justify-center duration-100 hover:scale-105' key={name}>
                                                                <Image src={`/skills-svg/${image}.svg`} alt='' height={60} width={60} className='w-8 lg:w-10'/>
                                                                <span className='text-sm font-semibold text-center'>
                                                                    {
                                                                        name
                                                                    }
                                                                </span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </article>
                                        </Tab.Panel>
                                    )
                                })
                            }
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </Reveal>
        </section>
    )
}