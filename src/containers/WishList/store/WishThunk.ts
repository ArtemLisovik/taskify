import { createAsyncThunk } from "@reduxjs/toolkit";
import {doc, getDoc} from 'firebase/firestore'

import { database } from "config/firebase";

export const fetchWishFilters = createAsyncThunk('wish/filters', async (_, {dispatch}) => {
    const wishFiltersRef = doc(database, 'filters', 'wishListFilters')
    const wishFilters = (await getDoc(wishFiltersRef)).data()
    let wishFiltersToArray: string[] = []
    for (let key in wishFilters) {
        wishFiltersToArray.push(wishFilters[key])
    }
    return wishFiltersToArray.reverse()
})


