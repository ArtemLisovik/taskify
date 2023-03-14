import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import './Select.scss'

type ISelect = {
    value: string
    content: string
}

type SelectProps = {
    options: ISelect[]
    defaultOption: Partial<ISelect> & { hidden: boolean }
    isContext: boolean
    getSelectedOption?: Function
}

export const Select = ({ options, defaultOption, isContext, getSelectedOption }: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption.value)

    useEffect(() => {
        if (getSelectedOption) getSelectedOption(selectedOption)
    }, [selectedOption])

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const methods = useFormContext()
    const context = isContext ? { ...methods.register(`mode`) } : null
    const optionsView = options.map((option, index) => {
        return (
            <option
                key={index}
                value={option.value}
                className="filters__bottom-option"
            >
                {option.content}
            </option>
        )
    })


    const defaultOptionItem = defaultOption.hidden ? (
        <option
            value={defaultOption.value}
            hidden
            className="filters__bottom-option">
            {defaultOption.content}
        </option>
    ) : (
        <option
            value={defaultOption.value}
            className="filters__bottom-option">
            {defaultOption.content}
        </option>
    )



    if (isContext) {
        return (
            <select
                {...context}
                className='select'>
                    {defaultOptionItem}
                    {optionsView}

            </select>
        )
    }

    return (
        <select
            onChange={handleSelectChange}
            value={selectedOption}
            className='select'>
                {defaultOptionItem}
                {optionsView}
        </select>
    )
}
