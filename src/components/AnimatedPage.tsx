/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2023-11-06 23:08:24
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2023-11-07 00:13:15
 */

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
type Props = {}

const animation = {
    initial: { opacity: 0.5, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}
const AnimatedPage = ({ children }: PropsWithChildren<Props>) => {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage
