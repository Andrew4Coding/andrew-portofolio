import { carouselInterface } from './interface';


export const CustomCarousel: React.FC<carouselInterface> = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}