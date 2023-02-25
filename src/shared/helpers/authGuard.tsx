import React from "react";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({children}: {children: React.ReactElement}):React.ReactElement => {
    const isAuthorized = true;
    return isAuthorized ? children : <Navigate to="/auth"/>
}