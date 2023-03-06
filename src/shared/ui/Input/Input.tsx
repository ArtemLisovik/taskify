import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import {motion} from 'framer-motion'

import styles from './Input.module.scss'

interface InputProps {
  name: string
  type: 'text' | 'date' | 'time' | 'number' | 'email' | 'password' | 'file'
  placeholder?: string
  id?: string
  isContext: boolean
  getInputValue?: Function
}

const Input = ({ name, type = 'text', placeholder, id, isContext, getInputValue }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      if (getInputValue){
        getInputValue(e.target.value)
      }
  }

  const methods = useFormContext()
  const context = isContext ? {...methods.register(`${name}`)} : null

  return (
      <motion.input
      whileFocus={{
        borderColor: `#1e9dfc`,
        boxShadow: '0 0 5px #1e9dfc, inset 0 0 9px #1e9dfc',
        transition: {duration: 0.2}
      }}
        // {...methods.register(`${name}`)}
        {...context}
        autoComplete="current-password"
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        id={id}
        onChange={e => onValueChange(e)}
      />
  )
}

export default Input
