import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";

// import { selectAuthetification, selectIsRefreshing, } from "redux/auth/selectors";

const PrivateRoute = ({children, redirecTo = '/'}) => {
  const authetificated = useAuth(); //useSelector(selectAuthetification);
  const isRefreshing = useUser(); //useSelector(selectIsRefreshing);
  const shouldRedirect = !authetificated && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirecTo} /> : children;
}

export default PrivateRoute;