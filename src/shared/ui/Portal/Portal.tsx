import React from 'react'
import ReactDOM from 'react-dom'

type PortalProps = {
    children: React.ReactNode
}

const Portal = ({children}: PortalProps) => ReactDOM.createPortal(children, document.querySelector('#modals') as Element)

export default Portal
    