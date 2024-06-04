interface PositionProps {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
}

export const Star: React.FC<PositionProps> = ({ top, right, bottom, left }) => {
    return (
        <svg style={{ "top": top, "right": right, "left": left, "bottom": bottom, }} className="star" width="62" height="58" viewBox="0 0 62 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 0L32.5047 29.9289L61.4338 22.1115L33.4347 32.7911L49.8091 57.8885L31 34.56L12.1909 57.8885L28.5653 32.7911L0.566191 22.1115L29.4953 29.9289L31 0Z" fill="black" />
        </svg>

    )
}
export const StarTiltLeft: React.FC<PositionProps> = ({ top, right, bottom, left }) => {
    return (
        <svg style={{ "top": top, "right": right, "left": left, "bottom": bottom, }} className="star" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.9117 4.97056L25.8375 21.6408L45.3253 32.8369L24.8128 23.6519L20.1867 45.6456L22.5835 23.2988L0.236642 25.6956L22.2304 21.0695L13.0454 0.556969L24.2415 20.0448L40.9117 4.97056Z" fill="black" />
        </svg>

    )
}
export const StarTiltRight: React.FC<PositionProps> = ({ top, right, bottom, left }) => {
    return (
        <svg style={{ "top": top, "right": right, "left": left, "bottom": bottom, }} className="star" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.7847 45.5692L22.584 26.6941L6.72559 42.6201L20.9067 25.1838L0.859633 15.0229L21.8247 23.1218L25.2934 0.916079L24.0695 23.3578L46.2603 19.7947L24.5387 25.5655L34.7847 45.5692Z" fill="black" />
        </svg>

    )
}