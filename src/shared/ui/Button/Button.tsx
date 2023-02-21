import React, { useState } from 'react'
import styles from './Button.module.scss'

interface PropsButton {
    name?: string,
    content: string
    isActive?: boolean
    onClick?: Function
    type: 'simple' | 'neon'
}

const typeButton = {
    neon: styles.button,
    simple: styles.simpleButton 
}

export const Button = ({ isActive, content, name, onClick, type }: PropsButton) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const onClickInit = (e: any) => {
        onClick ? onClick(e.target.name) : console.log('')
    }
    const activeClass: string = isActive ? styles.active: ''

    return (
        <button 
            name={name}
            onClick={e => onClickInit(e)}
            onMouseOver={() => setIsHover(true)} 
            onMouseOut={() => setIsHover(false)} 
            className={`${typeButton[type]} ${activeClass}`}
            >
            {content}
        </button>
    )
}