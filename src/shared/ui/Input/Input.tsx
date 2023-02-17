import { useFormContext } from 'react-hook-form'
import {FC} from 'react'

import styles from './Input.module.scss'

interface InputProps {
    name?: string
    type?: 'text' | 'date' | 'time'
    placeholder?: string
}

const Input: FC<InputProps> = ({name, type = 'text', placeholder}) => {

  const { register } = useFormContext()

  return (
    <div>
      <input  
        className={styles.input}
        type={type}
        placeholder={placeholder} 
        {...register(`${name}`, {
          required: 'This field is required'
        })}
        />
    </div>
  )
}

export default Input
