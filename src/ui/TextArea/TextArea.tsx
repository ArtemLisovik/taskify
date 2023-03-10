import {FC, useEffect, useState} from 'react'
import { useFormContext } from 'react-hook-form'
import {motion} from 'framer-motion'

import styles from './TextArea.module.scss'

type PropsData = {
    placeholder: string
    name: string
    value?: string | null
}

export const TextArea: FC<PropsData> = ({placeholder, name, value}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
    }
    useEffect(() => {
        setInputValue(value ? value : '')
    }, [])

    const {register} = useFormContext()
    return(
        <motion.textarea
            whileFocus={{
            borderColor: `#1e9dfc`,
            boxShadow: '0 0 5px #1e9dfc, inset 0 0 9px #1e9dfc',
            transition: {duration: 0.2}
            }}
            className={styles.textarea}
            placeholder={placeholder}
            {...register(`${name}`)}
            onChange={e => onInputChange(e)}
      
        ></motion.textarea>
    )
}