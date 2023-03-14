import { useAppSelector } from "./useRedux";

export const useWishesFilter = () => {
    const {userUid} = useAppSelector(state => state.auth.profile)
    const {wishMode, wishList, wishSearch} = useAppSelector(state => state.wishReducer)

    let filteredWishes;
    switch(wishMode){
        case 'myWishes': filteredWishes = wishList.filter((wish) => (
            wish.authorId === userUid
        ))
        break;

        case 'allWishes': filteredWishes = wishList.filter(wish => (
            wish.mode !== 'privat' || wish.authorId === userUid
        ))
        break;
    }

    filteredWishes?.filter(wish => wish.title.includes())
    return filteredWishes
}