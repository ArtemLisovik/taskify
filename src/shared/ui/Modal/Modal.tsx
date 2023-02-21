import React, { MouseEventHandler } from 'react'
import Portal from '../Portal/Portal'

import styles from './Modal.module.scss'

type ModalProps = {
    open: boolean
    children?: React.ReactNode
    modalSwitcher?: () => void

}

const Modal = ({ open, children, modalSwitcher }: ModalProps) => {
    if (!open) return null

    return (
        <Portal>
            <div className={styles.wrapper}>
            </div>
            <div className={styles.modal}>
                    <button 
                        className={styles.close}
                        onClick={modalSwitcher}
                        >&times;</button>
                    <div className='modal__inner'>
                        {children}
                    </div>
            </div>
        </Portal>
    )
}

export default Modal
