import { useAppSelector } from "../../../hooks/useRedux";

export const useWishesFilter = () => {
    const {userUid} = useAppSelector(state => state.auth.profile)
    const {wishMode, wishList, wishSearch, wishFilterStatus} = useAppSelector(state => state.wishReducer)

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
    return filteredWishes?.filter(wish => wish.status === wishFilterStatus)
    .filter(wish => {
       return wish.title.toLowerCase().includes(wishSearch.toLowerCase()) || 
       wish.text.toLowerCase().includes(wishSearch.toLowerCase())
    })
}