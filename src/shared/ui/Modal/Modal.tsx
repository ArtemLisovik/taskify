import React, { MouseEventHandler } from 'react'
import Portal from '../Portal/Portal'

import styles from './Modal.module.scss'

type ModalProps = {
    open: boolean
    children?: React.ReactNode
    handlerChange?: () => MouseEventHandler<HTMLButtonElement>
}

const Modal = ({ open, children, handlerChange }: ModalProps) => {
    if (!open) return null

    // const handler: MouseEventHandler<HTMLButtonElement> = () => {
    //     handlerChange ? handlerChange() : console.log('null')
    // }
    return (
        <Portal>
            <div className={styles.wrapper}>
            </div>
            <div className={styles.modal}>
                    <button 
                        className={styles.close}
                        onClick={handlerChange}
                        >&times;</button>
                    <div className='modal__inner'>
                        {children}
                    </div>
            </div>
        </Portal>
    )
}

export default Modal
