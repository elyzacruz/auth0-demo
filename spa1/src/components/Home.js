import React, { Fragment } from "react";

import { useAuth0} from "@auth0/auth0-react"; 

// import Hero from "../components/Hero";
// import Content from "../components/Content";
// import Load
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (!isAuthenticated &&
  <Fragment>
    <LoginButton />
  </Fragment>)
};

export default Home;
