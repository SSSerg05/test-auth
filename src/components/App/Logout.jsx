
// style
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";


export const Logout = () => {
  const {userId:authetificated} = useAuth();

  console.log(authetificated);
  // if (!authetificated) return (<></>)


  return (<>
    <SignedIn>
      <UserButton afterSignOutUrl='/test-auth' />
    </SignedIn>
    <SignedOut>
      <Link to="/test-auth/sign-in">Sign In</Link>
    </SignedOut>
  </>
  )
}

export default Logout;