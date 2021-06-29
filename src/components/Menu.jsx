import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          GriftCard Shop
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to="/giftcards"
              exact
            >
              GiftCards
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className=" justify-content-end">
          <Nav>
            <button type="button" className="btn btn-warning">
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>{" "}
              <span className="badge bg-secondary">0</span>
            </button>
            {/* <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/"
            >
              <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       GiftCard Shop
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink
    //             activeClassName="active"
    //             className="nav-item nav-link"
    //             exact
    //             to="/"
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             activeClassName="active"
    //             className="nav-item nav-link"
    //             to="/giftcards"
    //             exact
    //           >
    //             GiftCards
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    //     <ul className="navbar-nav ml-auto">
    //       <NavLink
    //         activeClassName="active"
    //         className="nav-item nav-link"
    //         exact
    //         to="/"
    //       >
    //         Logout
    //       </NavLink>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Menu;
