import React from "react";
import giftcard from "../img/giftcard.png";
// import Menu from "../components/Menu";
const Home = () => {
  return (
    <>
      <div className="container-fluid container-home ">
        <div className="container">
          <div className="row">
            <div className="col col-md-6 col-home">
              <div>
                <h1>¿Tienes una Gift Card?</h1>
                <h3>Prueba todas las marcas que la aceptan de manera online</h3>
              </div>
            </div>
            <div className="col col-md-6 col-home">
              <img className="img-home" src={giftcard} alt="imagen gif" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
