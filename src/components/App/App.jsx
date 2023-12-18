import React, { lazy } from "react";
import { ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton, } from "@clerk/clerk-react";
  import { Route, Routes, useNavigate } from "react-router-dom";

 

const {REACT_APP_CLERK_PUBLISHABLE_KEY} = process.env;
if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const HomePage = lazy(() => import('../../pages/HomePage'));
const LoginPage = lazy(() => import('../../pages/Sing-inPage'));
const RegisterPage = lazy(() => import('../../pages/Sing-upPage'));
// const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

function PublicPage() {
  return (
    <>
      <h1>Public page</h1>
      <a href="/protected">Go to protected page</a>
    </>
  );
}
 
function ProtectedPage() {
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
    </>
  );
}

function App() {
  const navigate = useNavigate();


  return (
    <ClerkProvider 
      publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      {/* <div>Hello from clerk</div> */}
      <Routes>
        <Route path="/" element={<PublicPage />} />
          <Route index element= {<HomePage />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
          <>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}
 
export default App;