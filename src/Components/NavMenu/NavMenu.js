import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";

const NavMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          <span className="text-primary">Trave</span>la
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="text-white">
              Home
            </Nav.Link>
            {user?.email ? (
              <div className="d-lg-flex">
                <Nav.Link
                  as={Link}
                  to={`/mybooking/${user.email}`}
                  className="text-white"
                >
                  My Booking
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/manageallbooking"
                  className="text-white"
                >
                  Manage All Booking
                </Nav.Link>
                <Nav.Link as={Link} to="/addnewevent" className="text-white">
                  Add New Event
                </Nav.Link>
                <button
                  className="btn btn-link"
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={logOut}
                >
                  LogOut
                </button>

                <Navbar.Text className="text-primary border border-primary px-2 py-1">
                  {user?.displayName ? (
                    <span>{user.displayName}</span>
                  ) : (
                    <span>{user.email}</span>
                  )}
                </Navbar.Text>
              </div>
            ) : (
              <div>
                <Nav.Link as={Link} to="/login" className="text-white">
                  Login/Register
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
