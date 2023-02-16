import { useController, useFormContext } from 'react-hook-form'

interface InputProps {
    name: string
    type?: 'text' | 'date' | 'time'
    placeholder?: string
}

const Input = ({name, type = 'text', placeholder}: InputProps) => {

  // const { control, watch, formState: {errors} } = useFormContext()
  // const { field } = useController({name, control})

  // console.log(watch())

  return (
    <div>
      <input 
        name={name} 
        // value={value} 
        // onChange={onChange} 
        type={type} 
        placeholder={placeholder} 
        />
      <div style={{color: 'red'}}></div>
    </div>
  )
}

export default Input
