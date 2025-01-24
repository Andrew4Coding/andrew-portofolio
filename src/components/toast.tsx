'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type ToastProps = {
    message: string;
    duration?: number;
    show: boolean;
    onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, show, onClose }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (show) {
            controls.start({ opacity: 1, y: 0 });
            const timeout = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timeout);
        } else {
            controls.start({ opacity: 0, y: -20 });
        }
    }, [show, controls, duration, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            exit={{ opacity: 0, y: -20 }} // Exit animation
            className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 rounded-md shadow-md"
        >
            <p>{message}</p>
        </motion.div>
    );
};

export default Toast;
