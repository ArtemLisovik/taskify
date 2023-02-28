import { MainPage } from 'pages/privat/TasksBoardPage/MainPage';
import { IntroPage } from 'pages/auth/IntroPage/IntroPage';
import { Routes, Route } from 'react-router-dom'
import { Intro } from 'widgets/Intro/ui/Intro';
import { Login } from 'widgets/Login/ui/Login';
import { Registration } from 'widgets/Registration/ui/Registration';
import { auth } from 'shared/config/firebase'
import { authActions } from 'widgets/Auth/model/AuthSlice';

import { useAppSelector } from 'shared/hooks/useRedux';
import { GuestGuard } from 'shared/helpers/guestGuard';
import Loader from 'shared/ui/Loader/Loader';


import './index.scss';
import { AuthGuard } from 'shared/helpers/authGuard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch<AppDispatch>()
  // auth.signOut()

  useEffect(() => {
    const sub = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authActions.setUser(user.uid))
      } else {
        dispatch(authActions.setUser(null))
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

