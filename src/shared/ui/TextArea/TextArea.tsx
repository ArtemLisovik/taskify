import {FC, useEffect, useState} from 'react'
import { useFormContext } from 'react-hook-form'

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
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
            {...register(`${name}`)}
            onChange={e => onInputChange(e)}
      
        ></textarea>
    )
}