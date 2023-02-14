import { useState } from 'react'
import styles from './Button.module.scss'

interface PropsButton {
    content: string
    color: string,
    isActive?: string
    onClick?: () => void
}

export const Button = ({ isActive, content, color, onClick }: PropsButton) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const activeClass: string = isActive === content ? styles.active : ''

    return (
        <button
            onClick={() => onClick?.()}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            style={{ background: isHover ? `${color}` : 'transparent', border: `3px solid ${color}`, boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}` }}
            className={`${styles.button} ${activeClass}`}
        >
            {content}
        </button>
    )
}