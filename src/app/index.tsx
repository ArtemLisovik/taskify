import { Routes, Route } from 'react-router-dom'

import Loader from 'shared/ui/Loader/Loader';
import { GuestGuard } from 'shared/helpers/guestGuard';
import { AuthGuard } from 'shared/helpers/authGuard';
import useInitializing from '../shared/hooks/useInitializing';

import BoardPage from 'pages/privat/BoardPage';
import IntroPage from 'pages/auth/IntroPage';
import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import {auth} from 'shared/config/firebase'


import './index.scss';

const App = () => {
  const loader = useInitializing()

  if (loader) {
    return <Loader />
  }
return (
  
  <Routes>

    {/* PRIVATE ROUTES */}
    <Route path='/' element={<AuthGuard />}>
      <Route index element={<BoardPage />} />
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

