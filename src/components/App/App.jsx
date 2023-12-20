import React, { lazy } from 'react'
// import ReactDOM from 'react-dom/client'
 // import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
 
// Import the layouts
import RootLayout from './root-layout'
import DashboardLayout from './dashboard-layout'
// import PublicRoute from './PublicRoute';
 
// Import the pages
const IndexPage = lazy(() => import('../../routes'));
const ContactPage = lazy(() => import('../../routes/contact'));
const SignInPage = lazy(() => import('../../routes/sign-in'));
const SignUpPage = lazy(() => import('../../routes/sign-up'));
const DashboardPage = lazy(() => import('../../routes/dashboard'));
const InvoicesPage = lazy(() => import('../../routes/dashboard.invoices'));
 

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
], { basename: '/test-auth'})

function App() {

  return (
    <RouterProvider router={router} />
  );
}
 
export default App;