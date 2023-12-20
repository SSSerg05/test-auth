// import { Theme } from "components/Header/Theme/Theme"
import { List, Link } from "./UserRegistration.styled"

export const UserRegistration =() => {
  return (
    <>
      <List>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/sign-in'>Login</Link></li>
        <li><Link to='/sign-up'>Register</Link></li>
      </List>

      {/* <Theme /> */}
    </>
  )
}