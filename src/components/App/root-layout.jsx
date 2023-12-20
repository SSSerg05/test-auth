import { Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
 
export default function RootLayout() {
 
  const {REACT_APP_CLERK_PUBLISHABLE_KEY} = process.env;
  if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
    <ClerkProvider 
      publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}
      // navigate={redirecTo}
  >
      <header className="header">
        <div>

          <div>
            <p>Clerk + React + React Router App</p>
          </div>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <Link to="/sign-in">Sign In</Link>
          </SignedOut>

        </div>
      </header>
      <main>
        <Suspense fallback={
          <>
            <div>Loading...</div>
          </> 
        }>
          <Outlet />
        </Suspense>
      </main>
    </ClerkProvider>
  )
}