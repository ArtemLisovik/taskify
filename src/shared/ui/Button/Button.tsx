import { type } from 'os'
import { useState } from 'react'
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
    simple: styles.simplButton 
}

export const Button = ({ isActive, content, name, onClick, type }: PropsButton) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const onClickInit = (e: any) => {
        onClick ? onClick(e.target.name) : console.log(onClick)
    }
    const activeClass: string = isActive ? styles.active: ''

    return (
        <button 
            name={name}
            onClick={e => onClickInit(e)}
            onMouseOver={() => setIsHover(true)} 
            onMouseOut={() => setIsHover(false)} 
            // style={{background: isHover  ? `${color}` : 'transparent', border: `3px solid ${color}`, boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}`}} 
            className={`${typeButton[type]} ${activeClass}`}
            >
            {content}
        </button>
    )
}