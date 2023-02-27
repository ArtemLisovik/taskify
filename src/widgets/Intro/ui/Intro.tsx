import {Link} from 'react-router-dom'
import { auth } from 'shared/config/firebase'

import './Intro.scss'

export const Intro = () => {

    // auth.signOut()
    return (
        <div className="intro">
            <h2 className="intro__title">Welcome to <span>Taskify</span>!</h2>
            <div className="intro__menu">
                <Link to='login'>Log in</Link>
                <Link to='registration'>Create account</Link>
            </div>
        </div>
    )
}
