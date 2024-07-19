'use client'
import Button from "@/components/Button";
import Input from "@/components/input";
import Toast from "@/components/toast";
import { titleVariants } from "@/utils/animation-variants";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import { Send } from "lucide-react";
import { useState } from "react";
interface emailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}


export default function ContactModule() {
    const [openLoadingToast, setOpenLoadingToast] = useState(false);

    const [toastText, setToastText] = useState<string | null>(null);

    const [sendData, setSendData] = useState<emailProps>({
        name: '',
        email: '',
        subject: '',
        message: ''
    })


    function sendEmail(e: any) {
        setOpenLoadingToast(true);
        e.preventDefault();
        if (sendData.message == '') {
            emailjs.sendForm('service_jj06kbo', 'template_1bhoiqo', e.target, 'fX2t9sYTlHUQhnQo8')
                .then((res) => {
                    setOpenLoadingToast(false);
                    setToastText('Email sent successfully!');
                    
                    // Set Cookies
                    const datePlusFiveMinute = new Date(new Date().getTime() + 5 * 60 * 1000);
                    localStorage.setItem('nextEmailLimit', datePlusFiveMinute.toString());

                    e.target.reset();
                }).catch((err) => {
                    setOpenLoadingToast(false);
                    setToastText('An error occured, please try again later!');
                });
        }
    }


    return (
        <section className="px-10 lg:px-32 py-10 lg:py-20 bg-black/20 flex flex-col gap-4">
            <motion.h2
                variants={titleVariants}
                whileHover="hover"
                
                className="font-extrabold text-3xl lg:text-5xl text-white">contact me</motion.h2>
            <form method="post" className="flex flex-col md:flex-row gap-5" onSubmit={(e) => {
                e.preventDefault();
                const nextEmailLimit = localStorage.getItem('nextEmailLimit');
                const now = new Date();

                if (nextEmailLimit && new Date(nextEmailLimit) > now) {
                    setToastText('You can only send an email every 5 minutes!');
                    return
                }

                // If name, email, and subject are empty, then alert
                if (sendData.name == '' || sendData.email == '' || sendData.subject == '') {
                    setToastText('Please fill in the required fields!');
                }
                else {
                    sendEmail(e);
                }
            }}>
                <div
                    className="flex flex-col gap-5 w-full md:max-w-[250px]">
                    <Input required name="name_from" placeholder="Name" onChange={
                        (e) => setSendData({ ...sendData, name: e.target.value })
                    } />
                    <Input required type="email" name="email_from" placeholder="Email"
                        onChange={
                            (e) => setSendData({ ...sendData, email: e.target.value })
                        }
                    />
                    <Input required name="subject_from" placeholder="Subject"
                        onChange={
                            (e) => setSendData({ ...sendData, subject: e.target.value })
                        }
                    />
                </div>
                <textarea name="message_from" placeholder="Message" className="focus:outline-none p-5 text-sm rounded-md shadow-md font-semibold w-full min-h-[200px]" />
                <Button
                    type="button"
                    className="justify-center w-full lg:w-fit">
                    <Send />
                </Button>
            </form>
            {
                openLoadingToast &&
                <Toast
                    message="Loading..."
                    onClose={() => setOpenLoadingToast(false)}
                    show
                    duration={2000}
                />
            }
            {
                toastText &&
                <Toast
                    message={toastText}
                    onClose={() => setToastText(null)}
                    show
                    duration={2000}
                />
            }
        </section>
    )
}