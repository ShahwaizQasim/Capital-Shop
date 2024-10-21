import React from "react";
import { Navigate } from "react-router";


// const {user} = useContext(AuthContext)

const AdminRoute = ({user, children}) => {

    if (user?.userInfo?.userEmail !== "qasim@gmail.com") {
        return <Navigate to={'/'} />;
    }

    return children;
}

export default AdminRoute;