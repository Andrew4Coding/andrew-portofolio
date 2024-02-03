import { motion, useMotionValue, useTransform } from "framer-motion"

export const SeeCursorAnimation: React.FC<{ children?: React.ReactNode }> = () => {
    const x = useMotionValue(200)
    const y = useMotionValue(200)

    const rotateX = useTransform(y, [0, 400], [45, -45])
    const rotateY = useTransform(x, [0, 400], [-45, 45])

    function handleMouse(event: any) {
        x.set(event.pageX)
        y.set(event.pageY)
    }

    return (
        <div
            style={{
                width: 400,
                height: 400,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                perspective: 400,
            }}
            onMouseMove={handleMouse}
        >
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    rotateX,
                    rotateY,
                }}
            />
        </div>
    )
}