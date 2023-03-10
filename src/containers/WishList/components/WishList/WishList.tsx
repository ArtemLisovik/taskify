import { useAppDispatch } from 'hooks'
import {WishItem} from '../WishItem/WishItem'

import {fetchWishFilters} from '../../store/WishThunk'

import './WishList.scss'
import { useEffect } from 'react'

export const WishList = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log('hh')
        dispatch(fetchWishFilters())
    }, [])

    return(
        <div className="wishList">
            <WishItem/>
            <WishItem/>
            <WishItem/>
        </div>
    )
}