import React, { Fragment } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
// import Hero from "../components/Hero";
// import Content from "../components/Content";
import LoginButton from "./Login";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (isAuthenticated ? <Fragment>
    <a href="http://localhost:3001/profile" >Profile</a>
    <a href="http://localhost:3001/callApi" >Call API</a>
  </Fragment>: 'Please log in');
};


export default Home;
