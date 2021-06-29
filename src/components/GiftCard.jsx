import React from "react";

const GiftCard = () => {
  const imagen =
    "https://http2.mlstatic.com/D_NQ_NP_617413-MLA44837227390_022021-V.jpg";
  return (
    <div className="col col-md-3">
      <div className="card">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Prime video</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <div className="d-grid gap-2">
            <button className="btn btn-warning">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
