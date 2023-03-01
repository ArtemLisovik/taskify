import { FC, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { database } from 'shared/config/firebase'

import {auth} from 'shared/config/firebase'

import './header.scss'
import { useAppSelector } from 'shared/hooks/useRedux'

export const Header: FC = () => {
    const [submenu, setSubmenu] = useState(false)
    const name = useAppSelector(state => state.auth?.profile?.name)
    const profession = useAppSelector(state => state.auth?.profile?.profession)

    // const seeRef = async () => {
    //     const docRef = await getDocs(collection(database, "users"))
    //     // docRef.forEach(item => console.log(item.data()))
    //     // console.log(docRef)
    // }
    // seeRef()
    
    const isActive = submenu? `active` : ''
    return (
        <header className="header">
            <div className="header__container container">
                <h1 className="header__title">Taskify</h1>
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link active">Board</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">Map</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">Chronology</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">Panel</a>
                    </li>
                </ul>
                <div className="header__profile profile">
                    <div className="profile__photo">
                        <img src="" alt="" className="profile__avatar" />
                    </div>
                    <div className="profile__info">
                        <p className="profile__name">{name}</p>
                        <p className="profile__profession">{profession}</p>
                    </div>
                    <button onClick={() => setSubmenu(submenu => !submenu)}className="profile__button">
                        <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.437 407.437" xmlSpace="preserve" stroke="#ffffff">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " /> </g>

                        </svg>
                    </button>
                    <div className={`profile__submenu ${isActive}`}>
                        <button onClick={() => auth.signOut()} className='profile__submenu-button'>Sign out</button>
                    </div>
                </div>
            </div>
        </header>
    )
}