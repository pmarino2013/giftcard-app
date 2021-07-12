import React, { useState } from "react";
import { deleteCarrito } from "../helpers/carrito";
import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";

const CarritoModal = ({ show, handleClose, carritoUser, setCarritoUser }) => {
  const [state, setstate] = useState(0);

  useEffect(() => {
    totalCarrito();
  }, [carritoUser]);

  const totalCarrito = () => {
    console.log(carritoUser);
    let totalMostrar = 0;
    for (let i = 0; i < carritoUser.length; i++) {
      totalMostrar = totalMostrar + carritoUser[i].prod.precio;
    }
    setstate(totalMostrar);
  };

  const borrarCard = (id) => {
    let arr = carritoUser.filter((item) => {
      return item.id !== id;
    });
    setCarritoUser(arr);

    deleteCarrito(id).then((respuesta) => {
      console.log(respuesta);
    });
  };

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
                    <div className="d-grid gap-1">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          borrarCard(item.id);
                        }}
                      >
                        Borrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Modal.Body>
      <Modal.Footer>
        {carritoUser.length > 0 ? (
          <>
            <div className="alert alert-success" role="alert">
              Total a pagar: ${state}
            </div>
            <Button variant="success" onClick={handleClose}>
              Comprar
            </Button>
          </>
        ) : (
          <div className="alert alert-secondary" role="alert">
            No hay productos a mostrar
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CarritoModal;
