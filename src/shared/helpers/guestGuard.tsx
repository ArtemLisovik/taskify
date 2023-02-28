import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "shared/hooks/useRedux";

export const GuestGuard = () => {
    const {profile} = useAppSelector(state => state.auth)
    return profile ? <Navigate to='/' /> : <Outlet />
}