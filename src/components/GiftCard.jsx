import React from "react";

const GiftCard = ({ card, addCarrito, user }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={card.imagen} className="card-img-top" alt={card.titulo} />
        <div className="card-body">
          <h5 className="card-title">{card.titulo}</h5>
          <h3 className="card-text text-end">${card.precio}</h3>
          <div className="d-grid gap-2">
            {user && (
              <button
                className="btn btn-warning"
                onClick={() => {
                  addCarrito(card);
                }}
              >
                Agregar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
