import { createAsyncThunk } from "@reduxjs/toolkit";

import {getDoc, doc} from 'firebase/firestore'
import { database,auth } from "shared/config/firebase";
import {authActions} from './AuthSlice'

export const getUserUid = createAsyncThunk('userUID', (_, {dispatch}) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(authActions.authUserUid(user.uid))
          // const loggedUser = await getDoc(doc(database, "users", user.uid));
          //   dispatch(authActions.authUser(loggedUser?.data()))
            // dispatch(authActions.authUserUid(user.uid))
        } else {
          return dispatch(authActions.authUserUid(null))
        //   dispatch(authActions.authUserUid(null))
        }
      });
    //   return result
    })



    // const loggedUser = userUid
    // console.log(loggedUser)
    // // dispatch(authActions.authUser(loggedUser?.data()))
    // // dispatch(authActions.authUserUid(user.uid))