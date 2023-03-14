import React, {useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom'

const modal = document.getElementById('modal')

export const Portal = ({children}:{children: React.ReactNode}) => {
    const view = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
        modal?.appendChild(view)
      return () => {
        modal?.removeChild(view)}
    }, [])
    
    
    return ReactDOM.createPortal(children, view)
}
