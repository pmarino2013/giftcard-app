import React, { useState } from "react";

import CarritoModal from "./CarritoModal";

const CarritoBoton = ({ carritoUser, setCarritoUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>

        <span className="badge bg-secondary ms-2">
          {carritoUser ? carritoUser.length : "0"}
        </span>
      </button>
      {carritoUser && (
        <CarritoModal
          show={show}
          handleClose={handleClose}
          carritoUser={carritoUser}
          setCarritoUser={setCarritoUser}
        />
      )}
    </>
  );
};

export default CarritoBoton;
