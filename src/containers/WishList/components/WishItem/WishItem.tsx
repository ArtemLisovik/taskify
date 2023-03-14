import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from 'react'

import { IWish } from 'containers/WishList/types/IWish'
import {deleteWish, updateWish} from '../../store/WishThunk'
import { WishModal } from '../WishModal/WishModal'
import { useAppDispatch } from 'hooks'

import './WishItem.scss'


type WishItemProps = {
    index: number
} & IWish

export const WishItem = ({title, text, image, id, index, mode, authorId}: WishItemProps) => {
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const dispatch = useAppDispatch()

    const alterMode = mode === 'public' ? 'privat' : 'public'

    const modalHandler = () => {
        setEditModalOpen(state => !state)
    }

    return(
        <>
        <AnimatePresence>
            {editModalOpen ? <WishModal wish={{title, text, image, id, mode, authorId}} isOpen={editModalOpen} modalHandler={modalHandler}/> : null}
        </AnimatePresence>
        <motion.div 
            className="wishItem"
            style={subMenuOpen ? {zIndex: 1} : {zIndex: 0}}
            initial={{ y: '90%', x: '90%', opacity: 0, scale: 0 }}
            animate={{y: 0, x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, delay: index/6 }}}
            whileHover={{
                borderColor: `#1e9dfc`,
                boxShadow: '0 0 20px #1e9dfc, inset 0 0 20px #1e9dfc',
                transition:{delay: 0, duration: 0.2}
            }}
        >
                      <h3 className="wishItem__title">{title} <span className='wishItem__mode'>{mode}</span></h3>
                      <p className="wishItem__descr">{text}</p>
                        <div className="wishItem__image">
                            <img src={image as string} alt="Wish image" className="wishItem__image-item" />
                        </div>
  
                      <div className="wishItem__options">
                          <div className="wishItem__users">
                              <a href="#" className="wishItem__users-link">
                                  <img src='' alt="user avatar" className="wishItem__users-image" />
                              </a>
                              {/* <a href="#" className="wishItem__users-link">
                                  <img src={userAvatar} alt="user avatar" className="wishItem__users-image" />
                              </a> */}
                          </div>
                          <div className="wishItem__pin">
                              <svg className="wishItem__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                  width="408.318px" height="408.318px" viewBox="0 0 408.318 408.318"
                                  xmlSpace="preserve">
                                  <g>
                                      <path d="M265.48,134.831l-13.388-13.388L89.531,284.006c-15.3,15.3-15.3,38.25,0,53.55c15.3,15.3,38.25,15.3,53.55,0
          l223.762-223.762c26.775-26.775,26.775-68.85,0-93.712c-26.774-26.775-68.85-26.775-95.625,0L49.369,243.843
          c-38.25,38.25-36.338,97.538,0,135.788c38.25,38.25,97.537,38.25,135.787,0l162.562-162.562l-15.3-15.3L169.856,364.33
          c-30.6,30.601-78.413,30.601-109.013,0c-30.6-30.6-30.6-78.412,0-109.012l223.762-221.85c19.125-19.125,49.725-19.125,66.938,0
          c19.125,19.125,19.125,49.725,0,66.938l-221.85,223.762c-7.65,7.65-19.125,7.65-26.775,0s-7.65-19.125,0-26.775L265.48,134.831z"/>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                                  <g>
                                  </g>
                              </svg>
                              <p 
                                className="wishItem__pin-count"></p>
                          </div>
  
                          <div className="wishItem__options-menu options__dropdown">
                              <button 
                                onClick={() => setSubMenuOpen(state => !state)}
                                className={`options__dropdown-button ${subMenuOpen ? 'active' : ''}`}>
                                  <span className="options__dropdown-button-dot options__button-dot"></span>
                                  <span className="options__dropdown-button-dot options__button-dot"></span>
                                  <span className="options__dropdown-button-dot options__button-dot"></span>
                              </button>
                              <div className={`options__dropdown-menu ${subMenuOpen ? 'active' : ''}`}
                                // style={subMenuOpen ? {visibilty: 'visible', opacity: 1} : {opacity: 0}}  
                              >
                                  <button
                                      className='options__dropdown-menu-item'
                                      onClick={modalHandler}
                                  >
                                    Edit
                                  </button>
                                  <button
                                      className="options__dropdown-menu-item"
                                      onClick={() => {
                                        dispatch(updateWish([
                                            {title, text, image, authorId, id, mode: alterMode}
                                        ]))
                                      }}
                                    >
                                      Make it {alterMode}
                                    </button>
                                  <button
                                      className="options__dropdown-menu-item"
                                      onClick={() => {
                                        dispatch(deleteWish(id))
                                      }}
                                    >
                                      Delete
                                    </button>
                                    
                              </div>
                          </div>
                      </div>
                  </motion.div>
        </>
        
    )
}