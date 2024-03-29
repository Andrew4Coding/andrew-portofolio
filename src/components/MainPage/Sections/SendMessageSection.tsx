'use client'
import { useState } from "react"
import { InputField } from "../Elements/InputField"
import { sendMessageStructure } from "../Elements/interface";
import { Reveal } from "../util/Reveal";
import { SectionTitle } from "../../Template/SectionTitle";

import { motion } from 'framer-motion'
import Image from "next/image";

import emailjs from "@emailjs/browser"
import { useToast } from "@chakra-ui/react";
import { CustomAnimation } from "../util/CustomAnimation";
import { socialData } from "../constant";
import { SocialMediaButton } from "../Elements/SocialMediaButton";
import { Section } from "@/components/Template/Section";

export const SendMessageSection: React.FC = () => {
    const [sendData, setSendData] = useState<sendMessageStructure>({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    });


    function sendEmail(e: any) {
        e.preventDefault();
        if (sendData.Message == '') {
            emailjs.sendForm('service_jj06kbo', 'template_1bhoiqo', e.target, 'fX2t9sYTlHUQhnQo8')
                .then((res) => {
                    console.log(res);
                    e.target.reset();
                })
        }
    }

    return (
        <Section className="flex-col">
            <SectionTitle>
                Get In Touch
            </SectionTitle>
            <Reveal>
                <form className="flex flex-col gap-5" onSubmit={sendEmail}>
                    <InputField name="name_from" title="Name" placeholder="Andrew" data={sendData} setData={setSendData} />
                    <InputField name="email_from" title="Email" placeholder="andrew@gmail.com" data={sendData} setData={setSendData} />
                    <InputField name="subject_from" title="Subject" placeholder="Lorem Ipsum" data={sendData} setData={setSendData} />

                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-xs text-white">Message</h1>
                        <textarea name="message_from" className="bg-white rounded-md p-5 text-xs w-full lg:max-w-[20rem] shadow-sm" placeholder="Lorem Ipsum"></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.9 }}
                        className="bg-black w-full lg:w-[20rem] flex justify-center text-white py-5 text-xs rounded-xl font-semibold duration-100 hover:scale-105">

                        <span className="mr-5">Send</span>
                        <Image src={'/svg/send.svg'} alt="" width={15} height={15} className="fill-black" />
                    </motion.button>
                </form>
            </Reveal>
        </Section>
    )
}