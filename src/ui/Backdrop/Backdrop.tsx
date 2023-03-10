import {motion} from 'framer-motion'

import './Backdrop.scss'

export const Backdrop = ({children}: {children: React.ReactNode}) => {
  return (
    <motion.div 
        className='backdrop'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.3}}}
        transition={{duration: 0.2}}>
            {children}
    </motion.div>
  )
}