import React from 'react';
import { getDoc, doc } from 'firebase/firestore';

import { authActions } from 'app/store/AuthSlice';
import { auth, database } from 'shared/config/firebase';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useRedux';

const useInitializing = () => {
  const dispatch = useAppDispatch()
  const { loader } = useAppSelector(state => state.auth) 

  React.useEffect(() => {

    auth.onAuthStateChanged( async (user) => {

      if (user) {
        const loggedUser = await getDoc(doc(database, "users", user.uid));
          dispatch(authActions.authUser(loggedUser?.data()))
          dispatch(authActions.authUserUid(user.uid))
      } else {
        dispatch(authActions.authUser(null))
        dispatch(authActions.authUserUid(null))
      }
      
    });

  }, [])

  return loader
}

export default useInitializing