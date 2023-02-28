import Portal from '../Portal/Portal'
import './Loader.scss'

const Loader = () => {
    return (
        <Portal>
            <div className="bars-common bar-one"></div>
            <div className="bars-common bar-two"></div>
            <div className="bars-common bar-three"></div>

            <div className="squares-common square-one"></div>
            <div className="squares-common square-two"></div>
        </Portal>
    )
}

export default Loader