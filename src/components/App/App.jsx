import React, { lazy } from 'react'
import { ClerkProvider } from '@clerk/clerk-react';

// import ReactDOM from 'react-dom/client'
 // import ReactDOM from 'react-dom/client'
// import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import { Route, Routes, } from 'react-router-dom'
// Import the layouts
// import RootLayout from './root-layout'
// import DashboardLayout from './dashboard-layout'
import { Layout } from './Layout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
 
// Import the pages
const HomePage = lazy(() => import('../../routes'));
const ContactPage = lazy(() => import('../../routes/contact'));
const SignInPage = lazy(() => import('../../routes/sign-in'));
const SignUpPage = lazy(() => import('../../routes/sign-up'));
const DashboardPage = lazy(() => import('../../routes/dashboard'));
const InvoicesPage = lazy(() => import('../../routes/dashboard.invoices'));
 

// const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <IndexPage /> },
//       { path: "/contact", element: <ContactPage /> },
//       { path: "/sign-in", element: <SignInPage /> },
//       { path: "/sign-up", element: <SignUpPage /> },
//       {
//         element: <DashboardLayout />,
//         path: "dashboard",
//         children: [
//           { path: "/dashboard", element: <DashboardPage /> },
//           { path: "/dashboard/invoices", element: <InvoicesPage /> }
//         ]
//       }
//     ]
//   }
// ], { basename: '/test-auth'})

function App() {
  
  const {REACT_APP_CLERK_PUBLISHABLE_KEY} = process.env;
  if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }

  return (
    <ClerkProvider 
      publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}
      navigate={'/'}
    >
      <Routes>
        <Route path="/" element={ <Layout />}>
          <Route index element= {<HomePage />} />

          {/* <Route path="/login" element={ <LoginPage /> } /> */}
          <Route 
            path="sign-in" 
            element={ 
              <PublicRoute redirecTo="/dashboard" >
                <SignInPage /> 
              </PublicRoute>
            }
          />
          
          {/* <Route path="register" element={ <RegisterPage /> } /> */}
          <Route 
            path="sign-up" 
            element={ 
              <PublicRoute redirecTo="/dashboard">
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route 
            path="contact" 
            element={ 
              <PublicRoute redirecTo="/dashboard">
                <ContactPage />
              </PublicRoute>
            }
          />          

          <Route 
            path="dashboard" 
            element={ 
              <PrivateRoute redirecTo='/sign-in'>
                <DashboardPage /> 
              </PrivateRoute>} 
          />
          <Route 
            path="dashboard/invoices" 
            element={ 
              <PrivateRoute redirecTo='/sign-in'>
                <InvoicesPage /> 
              </PrivateRoute>} 
          />
        </Route>
      </Routes>

    {/*  <RouterProvider router={router} /> */}

    </ClerkProvider>
  );
}
 
export default App;