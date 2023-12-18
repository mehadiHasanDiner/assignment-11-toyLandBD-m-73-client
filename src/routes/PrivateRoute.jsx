import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated: authenticated }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-16">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return authenticated === true ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/signIn" state={{ from: location }} replace>
      {children}
    </Navigate>
  );
};

export default PrivateRoute;
