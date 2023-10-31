/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2023-10-29 04:49:56
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2023-10-31 16:07:06
 */
import { motion } from 'framer-motion'
import logo from '../assets/images/knustlogo.png'

interface Props {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
function Loader({ setLoading }: Props) {
    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 1.6,
            },
        },
        exit: {
            opacity: 0,
            y: -200,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
            },
        },
    }

    return (
        <div
            className="absolute z-50 flex h-screen w-full items-center justify-center align-middle"
            key="loader"
        >
            <motion.div
                className=""
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                onAnimationComplete={() => setLoading(false)}
            >
                <motion.div variants={item} className="h-60 w-auto">
                    <img src={logo} alt="" className="h-60 w-auto" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Loader
