import React, { Fragment } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import "./Nav.css";
import { useAuth0 } from "@auth0/auth0-react"; 
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const Navigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <Nav navbar>
        {isAuthenticated && < LogoutButton />}
        {isAuthenticated && (
            <button
            onClick={() => {
              window.location.href='http://localhost:3001/profile' ||`${window.location.origin}/profile`
              // window.location.href="https://ecruz-spa-1.whispirdev.com/profile"
            }}>
              Profile
          </button>
        )}
        {isAuthenticated && (
            <button
            onClick={() => {
              window.location.href=`${window.location.origin}/callApi`
            }}>
              Call API
          </button>
        )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
