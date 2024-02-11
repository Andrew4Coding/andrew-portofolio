
export const Section: React.FC<{children?: React.ReactNode, id?: string, className?: string}> = ({children, id, className}) => {
    return (
        <section
        className={`min-h-screen p-10 sm:p-24 lg:py-10 flex gap-5 ${className}`} id={id}>
            {children}
        </section>
    )
}