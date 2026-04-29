import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {session} = UserAuth();

    // Show loading while session is being determined
    if (session === undefined) {
        return (
            <div className="min-h-screen bg-[#FFF8E5] flex items-center justify-center">
                <div className="text-2xl font-google-sans">Loading...</div>
            </div>
        );
    }

    return <>{session ? <>{children}</> : <Navigate to="/" />}</>
}

export default PrivateRoute