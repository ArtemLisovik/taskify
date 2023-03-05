import React from 'react'
import { AnimatePresence } from 'framer-motion'

import { TaskModal } from 'features/TaskModal/ui/TaskModal'
import { Button } from '../../../shared/ui'

const FilterAddTask = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const handlerChange: any = () => {
        setIsOpen(state => !state)
    }
    return (
        <>
            <Button id='modalTrigger' content='New task' type='neon' onClick={handlerChange} />
            <AnimatePresence mode='wait' onExitComplete={() => null}>
                {isOpen && <TaskModal isOpen={isOpen} modalSwitcher={handlerChange} />}
            </AnimatePresence>
        </>
    )
}

export default FilterAddTask