import {WishItem} from './components/WishItem/WishItem'

import './WishList.scss'

export const WishList = () => {

    return(
        <div className="wishList">
            <WishItem/>
            <WishItem/>
            <WishItem/>
        </div>
    )
}