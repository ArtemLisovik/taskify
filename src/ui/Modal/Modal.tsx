import React from 'react'
import { motion } from 'framer-motion'
import { Backdrop } from '../Backdrop/Backdrop'

import styles from './Modal.module.scss'

type ModalProps = {
    children?: React.ReactNode
    modalSwitcher?: () => any
}

export const Modal = ({ children, modalSwitcher }: ModalProps) => {
    return (
        <Backdrop>
            <motion.div
                key='modal'
                className={styles.modal}
                initial={{ x: `-50%`, y: `-50%`, scale: 0.5}}
                animate={{ x: `-50%`, y: `-50%`, scale: 1, }}
                exit={{ x: `-50%`, y: `-50%`, scale: 0.5, opacity: 0, transition: {duration: 0.3} }}
                transition={{ duration: 0.2, ease: [0.165, 0.840, 0.440, 1.000] }}
            >
                <button
                    className={styles.close}
                    onClick={modalSwitcher}
                >&times;</button>
                <div className='modal__inner'>

                    {children}

                </div>
            </motion.div>
        </Backdrop>
    )
}