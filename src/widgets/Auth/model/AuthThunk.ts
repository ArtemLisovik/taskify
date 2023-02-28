import { AppDispatch } from "app/store/store";
import { connectToCollection } from "shared/helpers/connectToCollection";
import { getDocs } from "firebase/firestore"
import { auth } from "shared/config/firebase";
import { authActions } from "./AuthSlice";


// export const getUser = (id) => (dispatch: AppDispatch) => {

// }



// export const getUser = () => async (dispatch: AppDispatch) => {
//     const usersCollection = connectToCollection('users')
//     const data = await getDocs(usersCollection)
//     const users = data.docs.map((docs) => ({...docs.data(), id: docs.id}))
//     // console.log(users)
//     const user = users.find((user: any) => user?.id === localStorage.getItem('token'))
//     // console.log(user)
//     dispatch(authActions.setUser(user))
// }

// export const setLoggedUser = () => (dispatch: AppDispatch) => {
//     console.log('working')
//     auth.onAuthStateChanged((user) => {
//         if (user) {
//             console.log(user)
//             dispatch(authActions.setUser(user))
//         } else {
//             console.log('You are not authorized!')
//         }
//       });
// }