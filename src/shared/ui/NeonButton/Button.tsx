import { useState } from 'react'
import styles from './Button.module.scss'

interface PropsButton {
    name: string,
    color: string,
    isActive?: boolean
}

export const Button = ({ isActive, color, name }: PropsButton) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const activeClass: string = isActive ? styles.active: ''

    return (
        <button 
            onMouseOver={() => setIsHover(true)} 
            onMouseOut={() => setIsHover(false)} 
            style={{background: isHover  ? `${color}` : 'transparent', border: `3px solid ${color}`, boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}`}} 
            className={`${styles.button} ${activeClass}`}
            >
            {name}
        </button>
    )
}