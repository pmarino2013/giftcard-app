import React from "react";

const GiftCard = ({ card }) => {
  let user = JSON.parse(localStorage.getItem("usuario")) || null;
  // const imagen =
  //   "https://http2.mlstatic.com/D_NQ_NP_617413-MLA44837227390_022021-V.jpg";
  return (
    <div className="col">
      <div className="card h-100">
        <img src={card.imagen} className="card-img-top" alt={card.titulo} />
        <div className="card-body">
          <h5 className="card-title">{card.titulo}</h5>
          <h3 className="card-text text-end">${card.precio}</h3>
          <div className="d-grid gap-2">
            {user && <button className="btn btn-warning">Agregar</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
