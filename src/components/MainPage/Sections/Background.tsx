import Image from "next/image"

export const Background : React.FC = () => {
    return (
        <section className="fixed w-full h-full z-0 animate-pulse">
            <Image src={'/images/gradient-2.png'} alt="" width={1000} height={1000} className="z-0 object-cover h-screen w-screen"/>
        </section>
    )
}