import { useAuth } from '@clerk/clerk-react';
 
export default function ExternalDataPage() {
  const { getToken, isLoaded, isSignedIn } = useAuth();
 
  if (!isLoaded || !isSignedIn) {
    // You can handle the loading or signed state separately
    return null;
  }
 
  const fetchDataFromExternalResource = async () => {
    const token = await getToken();
    const data = [{ user: {token: token} }] // fetch your data
    return data;
  }
 
  return <div>...{fetchDataFromExternalResource()}</div>;
}