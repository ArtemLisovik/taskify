import { useState } from 'react'
import styles from './Button.module.scss'

interface PropsButton {
    name?: string,
    content: string
    color: string,
    isActive?: boolean
    onClick?: Function
}

export const Button = ({ isActive, content, color, name, onClick }: PropsButton) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    const onClickInit = (e: any) => {
        onClick? onClick(e.target.name): console.log('none')
    }
    const activeClass: string = isActive ? styles.active: ''

    return (
        <button 
            name={name}
            onClick={e => onClickInit(e)}
            onMouseOver={() => setIsHover(true)} 
            onMouseOut={() => setIsHover(false)} 
            style={{background: isHover  ? `${color}` : 'transparent', border: `3px solid ${color}`, boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}`}} 
            className={`${styles.button} ${activeClass}`}
            >
            {content}
        </button>
    )
}