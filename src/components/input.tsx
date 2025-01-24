import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    required?: boolean;
};

const Input: React.FC<InputProps> = ({ required, ...props }) => {
    return (
        <div className="relative">
            <input
                type="text"
                className="focus:outline-none p-5 text-sm rounded-md shadow-md font-semibold w-full flex-grow"
                {...props}
                required={required}
            />
            {required && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-red-500">*</span>
            )}
        </div>
    );
};

export default Input;
