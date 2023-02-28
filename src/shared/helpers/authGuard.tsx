import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppSelector } from "shared/hooks/useRedux";
import { RootState } from "app/store/store";
import { useEffect } from "react";


export const AuthGuard = () => {
    const {isAuth} = useAppSelector(state => state.auth)

    return isAuth ? <Outlet /> : <Navigate to='/auth' />
}