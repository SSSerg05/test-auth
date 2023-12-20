import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      <SignedOut>
        <Link to="/sign-in">Sign In</Link>
      </SignedOut>
      <hr></hr>
    </header>
  )
}
export default Header