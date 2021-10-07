import React from "react";
// import { Container, Row, Col } from "reactstrap";

// import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

const ProfileComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
    {isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* add button to redirect to spa2 */}
      </div>
    )}
    </>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
    onRedirecting: () => <Loading />,
  });