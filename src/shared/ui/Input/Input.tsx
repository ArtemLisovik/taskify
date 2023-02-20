import { useFormContext } from 'react-hook-form'
import {FC} from 'react'

import styles from './Input.module.scss'

interface InputProps {
<<<<<<< Updated upstream
    name?: string
=======
    ref?: any
    name: string
>>>>>>> Stashed changes
    type?: 'text' | 'date' | 'time'
    placeholder?: string
}

<<<<<<< Updated upstream
const Input: FC<InputProps> = ({name, type = 'text', placeholder}) => {
=======
const Input = ({ref, name, type = 'text', placeholder}: InputProps) => {
>>>>>>> Stashed changes

  const { register } = useFormContext()

  return (
    <div>
      <input  
        className={styles.input}
<<<<<<< Updated upstream
        type={type}
=======
        name={ref} 
        // value={value} 
        // onChange={onChange} 
        type={type} 
>>>>>>> Stashed changes
        placeholder={placeholder} 
        {...register(`${name}`, {
          required: 'This field is required'
        })}
        />
    </div>
  )
}

export default Input
