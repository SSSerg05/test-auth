import { useAuth } from '@clerk/clerk-react';

// components
import { UserRegistration } from './UserRegestration';
import { UserMenu } from './UserMenu';
// style
import { HeaderApp, Nav } from "./Header.styled";

export const Header = () => {
  const authetificated = useAuth();

  return (
    <HeaderApp>
      <Nav>
        {(authetificated && <UserMenu />) || <UserRegistration />}
      </Nav>
      <hr></hr>
    </HeaderApp>
  )
}