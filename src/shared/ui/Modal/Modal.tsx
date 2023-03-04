import React from 'react'
import Portal from '../Portal/Portal'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './Modal.module.scss'

type ModalProps = {
    open: boolean
    children?: React.ReactNode
    modalSwitcher?: () => void
}

const Modal = ({ open, children, modalSwitcher }: ModalProps) => {
    if (!open) return null

    return (
        <AnimatePresence>
            <Portal>
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  transition={{ duration: 0.5, ease: [0.165, 0.840, 0.440, 1.000] }}
                    className={styles.wrapper}>
                </motion.div>
                <motion.div
                    key='modal'
                    className={styles.modal}
                    initial={{ x: `-50%`, y: `100%` }}
                    animate={{ y: `-50%` }}
                    exit={{ y: `100%` }}
                    transition={{ duration: 0.5, ease: [0.165, 0.840, 0.440, 1.000] }}
                >
                    <button
                        className={styles.close}
                        onClick={modalSwitcher}
                    >&times;</button>
                    <div className='modal__inner'>
                        {children}
                    </div>
                </motion.div>
            </Portal>
        </AnimatePresence>

    )
}

export default Modal
