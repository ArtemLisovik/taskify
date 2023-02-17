import {FC} from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './TextArea.module.scss'

type PropsData = {
    placeholder: string
    name: string
}

export const TextArea: FC<PropsData> = ({placeholder, name}) => {

    const {register} = useFormContext()
    return(
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
            {...register(`${name}`, {
                required: 'Enter task description'
            }
            )}
      
        ></textarea>
    )
}