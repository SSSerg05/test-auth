import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
// import { selectAuthetification } from "redux/auth/selectors";

const PublicRoute = ({children, redirecTo = '/'}) => {
  const authetificated = useAuth() //useSelector(selectAuthetification);

  return authetificated ? <Navigate to={redirecTo} /> : children;
}

export default PublicRoute;
