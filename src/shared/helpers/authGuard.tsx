import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "shared/hooks/useRedux";

export const AuthGuard = () => {
    const {profile} = useAppSelector(state => state.auth)
    return profile ? <Outlet /> : <Navigate to='/auth' />
}