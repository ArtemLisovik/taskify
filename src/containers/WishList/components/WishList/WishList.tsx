import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { fetchWishFilters, fetchAllWishes } from '../../store/WishThunk'
import { WishItem } from '../WishItem/WishItem'
import { Loader } from 'ui'
import {useWishesFilter} from 'containers/WishList/hooks/useWishesFilter'

import './WishList.scss'

export const WishList = () => {
    const { wishList, wishStatus, wishMode } = useAppSelector(state => state.wishReducer)
    const {userUid} = useAppSelector(state => state.auth.profile)
    console.log(wishList)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchWishFilters())
        dispatch(fetchAllWishes())
    }, [])

    const filteredWishes = useWishesFilter()

    const viewWishes = filteredWishes?.map((wish, index) => {
        return (
            <WishItem key={wish.id} {...wish} index={index} />
        )
    })


    return (
        <div className="wishList">
            <AnimatePresence>
                {wishStatus === 'loading' ? <Loader /> : viewWishes}
            </AnimatePresence>
        </div>
    )
}