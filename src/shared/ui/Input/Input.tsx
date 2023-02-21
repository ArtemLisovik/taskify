import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Input.module.scss'

interface InputProps {
    name: string
    type?: 'text' | 'date' | 'time' | 'number'
    placeholder?: string
    value?: string | null
}

const Input = ({name, type = 'text', placeholder, value}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setInputValue(value ? value : '')
  }, [])


  const methods = useFormContext()

  return (
    <div>
      <input 
        {...methods.register(`${name}`)}
        className={styles.input}
        type={type} 
        placeholder={placeholder}
        value={inputValue}
        onChange={e => onValueChange(e)}
        />
    </div>
  )
}

export default Input
