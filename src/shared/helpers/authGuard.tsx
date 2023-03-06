import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "shared/hooks/useRedux";

export const AuthGuard = () => {
    const {userUid} = useAppSelector(state => state.auth.profile)
    return userUid ? <Outlet /> : <Navigate to='/auth' />
}