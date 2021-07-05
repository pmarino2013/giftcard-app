import React, { useEffect, useState } from "react";
import { getIdCarrito } from "../helpers/carrito";
import { Link, NavLink, useHistory } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

const Menu = () => {
  let history = useHistory();
  let user = JSON.parse(localStorage.getItem("usuario")) || null;
  const [carrito, setCarrito] = useState(null);
  useEffect(() => {
    getIdCarrito(user.id).then((resp) => {
      console.log(resp);
      setCarrito(resp);
    });
  }, []);

  const logOut = () => {
    localStorage.clear();
    history.replace("/login");
  };

  const logIn = () => {
    history.replace("/login");
  };

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
            {user ? (
              <>
                <button type="button" className="btn btn-warning me-2">
                  <i
                    className="fa fa-shopping-cart fa-2x"
                    aria-hidden="true"
                  ></i>
                  {carrito && (
                    <span className="badge bg-secondary">{carrito.length}</span>
                  )}
                </button>
                <button type="button" className="btn btn-info" onClick={logOut}>
                  <i className="fa fa-sign-out me-1" aria-hidden="true"></i>
                  {user.username}
                </button>
              </>
            ) : (
              <button type="button" className="btn btn-info" onClick={logIn}>
                <i className="fa fa-user" aria-hidden="true"></i>
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
