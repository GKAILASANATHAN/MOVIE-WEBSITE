import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const authUser = () => {
  const user = localStorage.getItem("googleToken");
  return user != null;
};

const ProtectedRoute = () => {
  const isAuth = authUser();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
