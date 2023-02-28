import { MainPage } from 'pages/privat/TasksBoardPage/MainPage';

import { Routes, Route } from 'react-router-dom'
import { Intro } from 'widgets/Intro/ui/Intro';
import { Login } from 'widgets/Login/ui/Login';
import { Registration } from 'widgets/Registration/ui/Registration';
import { auth } from 'shared/config/firebase'
import { authActions } from 'app/model/AuthSlice';
import { database } from 'shared/config/firebase';

import { useAppSelector } from 'shared/hooks/useRedux';
import { GuestGuard } from 'shared/helpers/guestGuard';
import Loader from 'shared/ui/Loader/Loader';
import {createUserWithEmailAndPassword} from 'firebase/auth'


import './index.scss';
import { AuthGuard } from 'shared/helpers/authGuard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const sub = auth.onAuthStateChanged( async (user) => {
      if (user) {
        const loggedUser = await getDoc(doc(database, "users", user.uid));
        if (loggedUser.exists()) {
          dispatch(authActions.authUser(loggedUser.data()))
          dispatch(authActions.authUserUid(user.uid))
          // console.log("Document data:", loggedUser.data());
        } else {
          dispatch(authActions.authUser(null))
          // doc.data() will be undefined in this case
          // console.log("No such document!");
        }
      } else {
        dispatch(authActions.authUser(null))
        console.log('You are not authorized!')
      }
    });
    return sub
  }, [])

  const {loader} = useAppSelector(state => state.auth) 
  if (loader) {
    return <Loader />
  }
return (
  
  <Routes>
    {/* PRIVATE ROUTES */}
    <Route path='/' element={<AuthGuard />}>
      <Route index element={<MainPage />} />
    </Route>

    {/* AUTH ROUTES */}

    <Route path='/auth' element={<GuestGuard />}>
      <Route index element={<Intro />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
    </Route>
  </Routes>
);
}

export default App;

