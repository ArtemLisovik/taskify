import {Routes, Route} from 'react-router-dom'

import { BoardPage, WishListPage, ProfilePage, IntroPage, LoginPage, RegisterPage } from 'pages'
import { GuestGuard } from './Guards/GuestGuard'
import { PrivatGuard } from './Guards/PrivatGuard'

export const Routing = () => {
  return (
    <Routes>

    {/* PRIVATE ROUTES */}
    <Route path='/' element={<PrivatGuard />}>
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
  )
}