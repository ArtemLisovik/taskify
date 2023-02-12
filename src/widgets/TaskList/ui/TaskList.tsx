import { FC } from "react"

import userAvatar from './user.jpg'

import './TaskList.scss'
import { SimpleButton } from "../../../shared/ui/simpleButton/SimpleButton"


export const TaskList: FC = () => {
    return (
        <div className="tasks">
            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque autem nesciunt sapiente, veritatis nemo doloribus cupiditate possimus corrupti ad fuga harum, velit tempore distinctio, quia at ratione vitae odit! Sequi.
                Minus modi, necessitatibus non nisi deserunt delectus blanditiis vitae commodi temporibus at odio minima fuga sequi sapiente placeat voluptas sunt fugiat, nobis voluptates ea ratione beatae et! Odio, est delectus?.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, aspernatur aut atque voluptatibus quasi maiores qui dolorem aliquam quod fugit modi corporis, deserunt aperiam incidunt, nam obcaecati voluptatum. Labore, molestiae.
                Praesentium nisi fugit iste eum, illo mollitia, nemo quidem tempora, odit aspernatur reprehenderit quos? Sapiente, facere quae perspiciatis numquam odit aspernatur totam quas! Omnis fugit nostrum, cum corporis quia perferendis?
                Quae quos omnis sapiente cumque saepe? Sequi nam minus excepturi architecto velit veritatis dolor fugit, quos amet accusantium temporibus earum? Dolore, deserunt reprehenderit. Consequatur sequi totam, quod libero quaerat praesentium.
                Voluptatum, voluptas dignissimos aliquam possimus necessitatibus illo a maxime ducimus unde. Distinctio excepturi, consectetur provident cupiditate velit quam laborum quas dolorum iure sit impedit commodi atque quisquam illum enim a.
                Maxime, aliquid natus velit eveniet veritatis molestiae nam fugiat. Nam ea corporis facere corrupti temporibus ratione quia incidunt atque eaque voluptate! Accusantium exercitationem necessitatibus, cum tempore nisi a ex quia? of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

            <div className="tasks__item task">
                <h3 className="task__title">Sign up flow</h3>
                <p className="task__descr">Show email, company, name, full name, date of birth.</p>
                <div className="task__progressbar">
                    <div className="task__progressbar-fill"></div>
                </div>
                <p className="task__time-remaining"><span>7</span> hourse remaining</p>
                <SimpleButton />
                <div className="task__options">
                    <div className="task__users">
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                        <a href="#" className="task__users-link">
                            <img src={userAvatar} alt="user avatar" className="task__users-image" />
                        </a>
                    </div>
                    {/* <img src="#" alt="" className="task__pin-icon" /> */}
                    <div className="task__pin">
                        <svg className="task__pin-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                        <p className="task__pin-count">2</p>
                    </div>

                    <div className="task__options-menu options__button">
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                        <span className="options__button-dot"></span>
                    </div>
                </div>
            </div>

    

        </div>
    )

}