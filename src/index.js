import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'


const {REACT_APP_CLERK_PUBLISHABLE_KEY} = process.env;
if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <BrowserRouter basename='/test-auth'> */}
      <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}>

          <App />
        </ClerkProvider>

    {/* </BrowserRouter> */}
  </React.StrictMode>
);
