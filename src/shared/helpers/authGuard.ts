import React from "react";
import { Navigate } from "react-router-dom";
import { Registration } from "widgets/Registration/ui/Registration";

// export const authGuard = (Component: React.FC) => () => {
//     const user = false // useSelector
//     return user ? <Component/> : <Navigate to='/auth/login'/>
// }

export const AuthGuard = ({children}: {children: React.ReactNode}) => {
    const isAuthorized = false;
    return isAuthorized ? children : <Navigate to="/auth"/>
}