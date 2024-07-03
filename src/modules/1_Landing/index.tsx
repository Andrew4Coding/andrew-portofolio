'use client'

import Button from "@/components/Button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function LandingModule() {
    return (
        <section className="px-32 w-full h-full flex gap-10">
            <div className="w-full flex flex-col gap-6 justify-center">
                <h3 className="text-5xl font-medium">Andrew Devito Aryo, a</h3>
                <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#576BEA] to-[#313C84]">Full Stack Developer</h1>
                <div className="flex gap-5">
                    <Button><span>Learn More</span></Button>
                    <Button
                        variant="secondary"
                    >
                        <span>See CV</span>
                        <Download className="w-4"/>
                    </Button>
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Image
                    src={'/profile-image.png'}
                    alt="Profile Image"
                    width={500}
                    height={500}
                    className=""
                />
            </div>
        </section>
    )
}