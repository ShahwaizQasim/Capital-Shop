import React from "react";
import { useNavigate } from "react-router";

// const {user} = useContext(AuthContext)

const AdminRoute = ({ user, children }) => {

    const navigate = useNavigate()

  if (user?.userInfo?.userEmail !== "qasim@gmail.com") {
    return navigate('/');
  }

  return children;
};

export default AdminRoute;
