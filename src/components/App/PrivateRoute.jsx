import React from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";


// import { selectAuthetification, selectIsRefreshing, } from "redux/auth/selectors";

const PrivateRoute = ({children, redirecTo = '/'}) => {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()
 
  console.log('test', userId)
 
  React.useEffect(() => {
    if (!userId) {
      navigate(redirecTo);
    }
  }, [userId, navigate, redirecTo])
 
  if (!isLoaded) return "Loading..."


  return children;
}

export default PrivateRoute;