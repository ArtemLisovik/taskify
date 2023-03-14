import { createAsyncThunk } from "@reduxjs/toolkit";
import {doc, getDoc, getDocs, setDoc, query, where, collection, deleteDoc, updateDoc} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { database,storage } from "config/firebase";
import { IWish } from "../types/IWish";
import { RootState } from "store";

export const fetchWishFilters = createAsyncThunk('wish/filters', async (_, {dispatch}) => {
    const wishFiltersRef = doc(database, 'filters', 'wishListFilters')
    const wishFilters = (await getDoc(wishFiltersRef)).data()
    let wishFiltersToArray: string[] = []
    for (let key in wishFilters) {
        wishFiltersToArray.push(wishFilters[key])
    }
    return wishFiltersToArray.sort().reverse()
})

type createNewWishProps = [
    newWish: IWish,
    wishId: string,
    image: File | string
]
export const createNewWish = createAsyncThunk('wish/createWish', async ([newWish, wishId, image]: createNewWishProps, {dispatch}) => {
    try {

        //Uploading wish image into firebase storage
        const wishesRef = ref(storage, `wishes/${wishId}`);
        await uploadBytes(wishesRef, image as File)
        const wishImageURL = await getDownloadURL(wishesRef)

        // Creating wishes info object in firestore
        const newWishWithImg = {...newWish, image: wishImageURL}
        const wishRef = doc(database, 'wishes', wishId)
        await setDoc(wishRef, newWishWithImg)
        return newWishWithImg
    }
    catch(error) {
        console.log(error)
        throw new Error('error')
    }
})

export const fetchAllWishes = createAsyncThunk('wish/fetchAllWishes', async (_, {getState}) => {
    const {userUid} = (getState() as RootState).auth.profile
    const wishListRef = collection(database, 'wishes')
    // const filteredWishCollection = getDocs(wishListRef)
    // const filteredWishCollection = query(collection(database, 'wishes'), where("authorId", "==", userUid))
    const wishList = await getDocs(wishListRef);
    let unpackedWishList: IWish[] = []
    wishList.forEach((wish: any) => unpackedWishList.push(wish.data()))
    return unpackedWishList
})

export const deleteWish = createAsyncThunk('wish/deleteWish', async (id: IWish['id'], {dispatch}) => {
    const selectedWishRef = doc(database, 'wishes', id)
    await deleteDoc(selectedWishRef)
    return id
})

type updatedWishProps = [
    updatedWish: IWish,
    image?: File | string
]
export const updateWish = createAsyncThunk('wish/updateWish', async ([updatedWish, image]: updatedWishProps ) => {
    if (image) {
        if (typeof image !== 'string') {
            const wishesRef = ref(storage, `wishes/${updatedWish.id}`);
            await uploadBytes(wishesRef, image as File)
            const wishImageURL = await getDownloadURL(wishesRef)

            const wish = {...updatedWish, image: wishImageURL}
            const selectedWishRef = doc(database, 'wishes', updatedWish.id)
            await updateDoc(selectedWishRef, wish)
            return wish
        }
        const selectedWishRef = doc(database, 'wishes', updatedWish.id)
        await updateDoc(selectedWishRef, updatedWish)
        return updatedWish
    }
    else {
        const selectedWishRef = doc(database, 'wishes', updatedWish.id)
        await updateDoc(selectedWishRef, updatedWish)
        return updatedWish
    }
})
