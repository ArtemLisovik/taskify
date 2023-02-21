import React, { MouseEventHandler } from 'react'

import { TaskModal } from 'widgets/TaskModal/ui/TaskModal'
import { Button } from '../../../shared/ui'



const FilterAddTask = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handlerChange: any = () => {
        setIsOpen(state => !state)
    }

    return (
        <>
            <Button content='New task' type='neon' onClick={handlerChange}/>
            {isOpen ? <TaskModal isOpen={isOpen} modalSwitcher={handlerChange}/> : null }
        </>
    )
}

export default FilterAddTask