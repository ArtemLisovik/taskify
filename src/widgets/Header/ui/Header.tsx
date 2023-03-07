import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink} from 'react-router-dom'

import { auth } from 'shared/config/firebase'

import './header.scss'
import { useAppSelector } from 'shared/hooks/useRedux'

export const Header: FC = () => {
    const [submenu, setSubmenu] = useState(false)

    const userProfile = useAppSelector(state => state.auth?.profile)
    const { name, profession, avatar }: any = userProfile

    const isActiveClass = ({isActive}:any) => isActive ? "header__menu-link active" : "header__menu-link"

    return (
        <header className="header">
            <div className="header__container container">
                <Link to='/' className="header__title">Taskify</Link>
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <NavLink
                            to='/'
                            className={isActiveClass}>
                                Board
                        </NavLink>
                </li>
                <li className="header__menu-item">
                    <Link to='/wishlist' className="header__menu-link">Wish List</Link>
                </li>
                <li className="header__menu-item">
                    <Link to='/profile' className="header__menu-link">Profile</Link>
                </li>
            </ul>
            <div className="header__profile profile">
                <div className="profile__photo">
                    <img src={avatar} alt="avatar" className="profile__avatar" />
                </div>
                <div className="profile__info">
                    <p className="profile__name">{name}</p>
                    <p className="profile__profession">{profession}</p>
                </div>
                <button
                    onClick={() => setSubmenu(submenu => !submenu)}
                    className="profile__button">
                    <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.437 407.437" xmlSpace="preserve" stroke="#ffffff">

                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                        <g id="SVGRepo_iconCarrier"> <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " /> </g>

                    </svg>
                </button>
                <AnimatePresence>
                    {submenu && <motion.div
                        key='submenu'
                        className='profile__submenu'
                        initial={{ height: 0 }}
                        animate={{ height: '30px' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeIn' }}>
                        <motion.button
                            whileHover={{ color: `#ff5761`, transition: { delay: 0, duration: 0.2 } }}
                            key='submenuItem'
                            onClick={() => auth.signOut()}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: { delay: 0.15, duration: 0.2 } }}
                            exit={{ opacity: 0, transition: { duration: 0.1, delay: 0 } }}
                            className='profile__submenu-button'>
                            Sign out
                        </motion.button>
                    </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
        </header >
    )
}