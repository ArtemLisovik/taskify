import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "shared/hooks/useRedux";

export const GuestGuard = () => {
    const {userUid} = useAppSelector(state => state.auth.profile)
    return userUid ? <Navigate to='/' /> : <Outlet />
}