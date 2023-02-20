import { useFormContext } from 'react-hook-form'
import {FC} from 'react'

import styles from './Input.module.scss'

interface InputProps {
    ref?: any
    name: string
    type?: 'text' | 'date' | 'time'
    placeholder?: string
}

const Input = ({ref, name, type = 'text', placeholder}: InputProps) => {

  const { register } = useFormContext()

  return (
    <div>
      <input  
        className={styles.input}
        // name={ref} 
        // value={value} 
        // onChange={onChange} 
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
