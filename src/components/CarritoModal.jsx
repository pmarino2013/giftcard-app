import React from "react";

import { Modal, Button } from "react-bootstrap";

const CarritoModal = ({ show, handleClose, carritoUser }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show &&
          carritoUser.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.prod.imagen}
                    className="img-fluid rounded-start"
                    alt={item.prod.titulo}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.prod.titulo}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{item.prod.precio}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarritoModal;
