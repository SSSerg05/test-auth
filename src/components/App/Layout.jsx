import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

import { Container, } from "./Layout.styled.js";
import Header from 'components/Header';


export const Layout = () => {

  return (
    <Container>
      
      <Header />

      <main>
        <Suspense fallback={
          <>
            <div>Loading...</div>
          </> 
        }>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}