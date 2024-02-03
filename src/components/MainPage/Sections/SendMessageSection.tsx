'use client'
import { useState } from "react"
import { InputField } from "../Elements/InputField"
import { sendMessageStructure } from "../Elements/interface";
import { Reveal } from "../util/Reveal";

export const SendMessageSection: React.FC = () => {
    const [sendData, setSendData] = useState<sendMessageStructure>({
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    });

    return (
        <Reveal>
            <section className="min-h-screen p-10 lg:p-40 flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h1 className="text-xl lg:text-4xl font-bold" id="about-me">💌 Get in Touch</h1>
                </div>
                <article className="flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <InputField title="Name" placeholder="Andrew" data={sendData} setData={setSendData} />
                        <InputField title="Email" placeholder="andrew@gmail.com" data={sendData} setData={setSendData} />
                    </div>

                    <div className="flex flex-col gap-10">
                        <InputField title="Subject" placeholder="Lorem Ipsum" data={sendData} setData={setSendData} />
                
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold text-sm">Message</h1>
                            <textarea className="bg-white p-5 text-xs max-w-[43rem] shadow-sm" placeholder="Lorem Ipsum"></textarea>
                        </div>
                    </div>
                    <button className="bg-black text-white py-5 text-xs rounded-xl font-semibold duration-100 hover:scale-105">Send</button>
                </article>
            </section>
        </Reveal>
    )
}