import { useFormContext } from 'react-hook-form'

import styles from './Input.module.scss'

interface InputProps {
    name?: string
    type?: 'text' | 'date' | 'time'
    placeholder?: string
}

const Input = ({name, type = 'text', placeholder}: InputProps) => {

  const { register, formState: {errors} } = useFormContext()
  return (
    <div>
      <input  
        className={styles.input}
        type={type}
        placeholder={placeholder} 
        {...register('firstName', {
          required: 'needed'
        })}
        />
        {errors.root?.message && <div>{errors.root?.message}</div>}
    </div>
  )
}

export default Input
