import { Reveal } from "../MainPage/util/Reveal"

export const Section: React.FC<{children?: React.ReactNode, id?: string, className?: string}> = ({children, id, className}) => {
    return (
        <Reveal>
            <section className={`min-h-screen p-10 sm:p-24 lg:p-36 lg:py-10 flex flex-col gap-5 ${className}`} id={id}>
                {children}
            </section>
        </Reveal>
    )
}