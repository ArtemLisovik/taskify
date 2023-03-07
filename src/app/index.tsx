import { Routes, Route } from 'react-router-dom'

import Loader from 'shared/ui/Loader/Loader';
import { GuestGuard } from 'shared/helpers/guestGuard';
import { AuthGuard } from 'shared/helpers/authGuard';
import useInitializing from '../shared/hooks/useInitializing';
import {WishListPage} from 'pages/privat/WishListPage'
import { ProfilePage } from 'pages/privat/ProfilePage';

import BoardPage from 'pages/privat/BoardPage';
import IntroPage from 'pages/auth/IntroPage';
import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';


import './index.scss';
import { useAppSelector } from 'shared/hooks/useRedux';

const App = () => {
  const loader = useInitializing()
  const auth = useAppSelector(state => state.auth)
  console.log(auth)
  if (loader) {
    return <Loader />
  }
return (
  
  <Routes>

    {/* PRIVATE ROUTES */}
    <Route path='/' element={<AuthGuard />}>
      <Route index element={<BoardPage />} />
      <Route path='wishlist/' element={<WishListPage/>}/>
      <Route path='profile/' element={<ProfilePage/>}/>
    </Route>

    {/* AUTH ROUTES */}
    <Route path='/auth' element={<GuestGuard />}>
      <Route index element={<IntroPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='registration' element={<RegisterPage />} />
    </Route>

  </Routes>

);
}

export default App;

