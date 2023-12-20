import Logout from "./Logout";
import { List, Link, } from "./UserMenu.styled";


export const UserMenu = () => {

  return (
    <>
      <List>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Contacts</Link></li>
      </List>
      
      <Logout />
    </>
  )
}