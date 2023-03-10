import {motion} from 'framer-motion'
import './Loader.scss'

export const Loader = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >
        <div className="bars-common bar-one"></div>
            <div className="bars-common bar-two"></div>
            <div className="bars-common bar-three"></div>

            <div className="squares-common square-one"></div>
            <div className="squares-common square-two"></div>
        </motion.div>
    )
}
