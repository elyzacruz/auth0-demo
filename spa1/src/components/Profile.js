import React from "react";
// import { Container, Row, Col } from "reactstrap";

// import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

// export const ProfileComponent = () => {
//   const { user } = useAuth0();
//     console.log('user');
//   return (
//       <>
//       HELLO
//     {/* // <Container className="mb-5">
//     //   <Row className="align-items-center profile-header mb-5 text-center text-md-left">
//     //     <Col md={2}> */}
//           <img
//             src={user.picture}
//             alt="Profile"
//             // className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//           />
//         {/* </Col>
//         <Col md> */}
//           <h2>{user.name}</h2>
//           <p className="lead text-muted">{user.email}</p>
//           <LogoutButton />
//     {/* //     </Col>
//     //   </Row>
//     // </Container> */}
//     </>
//   );
// };

// export default withAuthenticationRequired(ProfileComponent, {
//   onRedirecting: () => <Loading />,
// });

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

const ProfileComponent = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* add button to redirect to spa2 */}
        <LogoutButton />
        <a href='http://localhost:3001/callApi' target="_blank" >GO TO PROFILE 3001</a>
        {/* <a href='http://localhost:3001/profile' target="_blank" >GO TO PROFILE 3001</a> */}
      </div>
    )
  );
};

export default withAuthenticationRequired(ProfileComponent, {
    onRedirecting: () => <Loading />,
  });