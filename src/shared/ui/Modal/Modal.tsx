import React from 'react'
import { Button } from '../Button/Button'
import Portal from '../Portal/Portal'

import styles from './Modal.module.scss'

type ModalProps = {
    open: boolean
    children?: React.ReactNode
    onClose?: () => void
}

const Modal = ({ open, children, onClose }: ModalProps) => {
    if (!open) return null

    return (
        <Portal>
            <div className={styles.wrapper}>
            </div>
            <div className={styles.modal}>
                    <button className={styles.close}>&times;</button>
                    <div className='modal__inner'>
                        {children}
                    </div>
            </div>
        </Portal>
    )
}

export default Modal
