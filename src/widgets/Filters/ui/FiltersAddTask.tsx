import React, { MouseEventHandler } from 'react'
import { NewTaskModal } from '../../NewTaskModal/ui/NewTaskModal'
import { Button } from '../../../shared/ui'
import Modal from '../../../shared/ui/Modal/Modal'


const FilterAddTask = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handlerChange: any = () => {
        setIsOpen(state => !state)
    }

    return (
        <>
            <Button content='New task' type='neon' onClick={handlerChange}/>
                <Modal 
                    open={isOpen}
                    handlerChange={handlerChange}
                >
                    <NewTaskModal handlerChange={handlerChange}/>
                </Modal>
        </>
    )
}

export default FilterAddTask