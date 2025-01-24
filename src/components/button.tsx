'use client'
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    onClick?: () => void,
    children?: React.ReactNode,
    className?: string
}

const Button: React.FC<ButtonProps> = ({
    variant,
    onClick,
    className,
    children,
    ...props
}) => {
    const defaultVariant = variant || 'primary';

    const primaryStyle = 'bg-[#576BEA] text-white';
    const secondaryStyle = 'bg-[#F9F9FF] ';

    const buttonStyles = `px-14 py-4 flex gap-2 items-center justify-center shadow-md font-bold text-sm sm:text-lg rounded-xl ${className} `;

    return (

        <motion.button
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className={`${defaultVariant === 'primary' ? primaryStyle : secondaryStyle} ${buttonStyles}`}
            onClick={onClick}
        // {...props}
        >
            {children}
        </motion.button>
    );
}

export default Button