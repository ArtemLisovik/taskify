import { useSelector } from "react-redux"
import { Navigate,Outlet  } from "react-router-dom"

import { RootState } from "store/store"

export const PrivatGuard = () => {
    const isAuth = useSelector<RootState>(state => state.auth.profile.userUid)

    const view = isAuth ? <Outlet/> : <Navigate to='auth'/>
  return (
    <>
        {view}
    </>
  )
}