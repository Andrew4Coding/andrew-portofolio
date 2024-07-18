// scrollUtils.js
export const scrollToSection = (ref: { current: { scrollIntoView: (arg0: { behavior: string; }) => void; }; }) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
};
