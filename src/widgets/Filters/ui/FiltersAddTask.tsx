import React from 'react'
import { AddTaskForm } from '../../../features'
import { Button } from '../../../shared/ui'
import Modal from '../../../shared/ui/Modal/Modal'

const FilterAddTask = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    console.log(isOpen)

    const handlerChange = () => {
        setIsOpen(state => !state)
    }

    return (
        <>
            <Button content='New task' type='neon' onClick={handlerChange}/>
                <Modal open={isOpen}>
                    <AddTaskForm />
                </Modal>
        </>
    )
}

export default FilterAddTask