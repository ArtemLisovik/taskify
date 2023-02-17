import React from 'react'
import { NewTaskModal } from '../../../widgets/NewTaskModal/NewTaskModal'
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
                    <NewTaskModal />
                </Modal>
        </>
    )
}

export default FilterAddTask