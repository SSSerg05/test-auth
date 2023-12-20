import React from 'react'
// import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
 
// Import the layouts
import RootLayout from './root-layout'
import DashboardLayout from './dashboard-layout'
 
// Import the components
import IndexPage from '../../routes/index'
import ContactPage from '../../routes/contact'
import SignInPage from '../../routes/sign-in'
import SignUpPage from '../../routes/sign-up'
import DashboardPage from '../../routes/dashboard'
import InvoicesPage from '../../routes/dashboard.invoices'
 
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      // public pages
      { path: "/", element: <IndexPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        // private pages
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/invoices", element: <InvoicesPage /> }
        ]
      }
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  );
}
 
export default App;