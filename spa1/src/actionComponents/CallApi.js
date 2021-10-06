import React, { useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const CallApi = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  alert('isAuthenticated: ', isAuthenticated);
  const [userMetadata, setUserMetadata] = useState(null);
  const [apiRes, setApiRes] = useState(null);

  useEffect(() => {
  const getUserMetadata = async () => {
    const domain = "whispir-tabs.au.auth0.com";

    try {
      
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });

      const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

      const metadataResponse = await fetch(userDetailsByIdUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const userMetaData = await metadataResponse.json();

      const response = await fetch(`http://localhost:3060/userData`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const responseData = await response.json();

      setUserMetadata(userMetaData);
      setApiRes(responseData);
    } catch (e) {
      console.log(e.message);
    }
  };

  getUserMetadata();
}, [getAccessTokenSilently, user?.sub]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        {apiRes ? (
          <pre>{apiRes.message}</pre>
        ) : (
          "No api res"
        )}
      </div>
    )
  );
};

export default withAuthenticationRequired(CallApi, {
    onRedirecting: () => <Loading />,
  });