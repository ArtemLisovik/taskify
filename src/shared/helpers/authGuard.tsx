import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "shared/hooks/useRedux";

export const AuthGuard = () => {
    const loggedUser = useAppSelector(state => state.auth.user)
    console.log(loggedUser)

    const view = loggedUser ? <Outlet /> : <Navigate to='/auth' />
    return (
        <>
            {view}
        </>
    )
}