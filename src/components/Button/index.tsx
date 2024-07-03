interface ButtonProps {
    variant?: 'primary' | 'secondary'
    onClick?: () => void,
    children?: React.ReactNode,
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    className,
    children
}) => {
    const defaultVariant = variant || 'primary'

    const primaryStyle = 'px-16 py-5 bg-gradient-to-r from-[#576BEA] to-[#324AE7] text-white rounded-2xl hover:px-20 ease-in-out duration-300 ';
    const secondaryStyle = 'px-16 py-5 text-black font-medium rounded-2xl border-[2px] border-black hover:px-20 ease-in-out duration-300';

    return (
        <button className={defaultVariant === 'primary' ? primaryStyle : secondaryStyle + " flex gap-2 " + className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button