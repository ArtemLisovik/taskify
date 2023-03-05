import {motion} from 'framer-motion'
import { useEffect, useRef } from 'react'
import styles from './Button.module.scss'

interface PropsButton {
    name?: string,
    content: string
    isActive?: boolean
    onClick?: Function
    type: 'simple' | 'neon'
    id?: string
}

const typeButton = {
    neon: styles.button,
    simple: styles.simpleButton 
}

export const Button = ({ isActive, content, name, onClick, type, id }: PropsButton) => {
    // useEffect(() => {
    //     console.log(coordinates?.current?.getBoundingClientRect())
    // })

    // const coordinates = useRef<HTMLButtonElement | null>(null)

    const onClickInit = (e: any) => {
        onClick ? onClick(e.target.name) : console.log('')
    }
    const activeClass: string = isActive ? styles.active: ''

    return (
        <motion.button 
            // ref={id === 'modalTrigger' ? coordinates : null}
            initial={ type === 'neon' ? {background: 'none'}: {background: '#3ba1ff'}}
            whileHover={type === 'neon' ? {background: '#ff5761'}: {background: '#4ba8ff'}}
            whileTap={type === 'neon' ? {background: '#fa4d59'} : {background: '#108bfd'}}
            transition={{duration: 0.1}}
            name={name}
            onClick={e => onClickInit(e)}
            className={`${typeButton[type]} ${activeClass}`}
            >
            {content}
        </motion.button>
    )
}