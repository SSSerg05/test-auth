import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
 
const {REACT_APP_CLERK_PUBLISHABLE_KEY} = process.env;
if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <div>Hello from clerk</div>
    </ClerkProvider>
  );
}
 
export default App;