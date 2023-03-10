import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

import { RootState } from "store/store"


export const GuestGuard = () => {
    const isAuth = useSelector<RootState>(state => state.auth.profile.userUid)
    const view = isAuth ? <Navigate to='/'/> : <Outlet/> 

  return (
    <>
        {view}
    </>
  )
}
