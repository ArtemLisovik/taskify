import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import styles from './Input.module.scss'

interface InputProps {
  name: string
  type?: 'text' | 'date' | 'time' | 'number' | 'email' | 'password' | 'file'
  placeholder?: string
  id?: string
}

const Input = ({ name, type = 'text', placeholder, id }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
  }


  const methods = useFormContext()

  return (
    <div className={styles.wrapper}>
      {type === 'file' ? <p className={styles.label}>Select avatar</p> : null}
      <input
        {...methods.register(`${name}`)}
        autoComplete="current-password"
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        id={id}
        onChange={e => onValueChange(e)}
      />
    </div>
  )
}

export default Input
