import React, { useEffect, useState } from "react";
import { postCarrito, getIdCarrito } from "../helpers/carrito";

import GiftCard from "../components/GiftCard";
import CarritoBoton from "../components/CarritoBoton";
// import CarritoBoton from "../components/CarritoBoton";

const GiftCards = () => {
  let user = JSON.parse(localStorage.getItem("usuario")) || null;
  const [carrito, setCarrito] = useState(null);
  const [carritoUser, setCarritoUser] = useState(null);
  const [giftCards, setGiftCards] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCards().then((respuesta) => {
      setGiftCards({
        data: respuesta,
        loading: false,
      });
    });

    if (user) {
      traerCarrito();
    }
  }, []);

  useEffect(() => {
    if (carrito) {
      postCarrito(carrito).then((respuesta) => {
        traerCarrito();
      });
    }
  }, [carrito]);

  const getCards = async () => {
    let resp = await fetch("http://localhost:3004/giftcards");
    let datos = await resp.json();

    return datos;
  };

  const traerCarrito = () => {
    getIdCarrito(user.id).then((resp) => {
      setCarritoUser(resp);
    });
  };

  const addCarrito = (card) => {
    setCarrito({ idUser: user.id, prod: card });
  };

  return (
    <>
      {/* <Menu /> */}
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h1>GiftCard</h1>
            {user && <CarritoBoton carritoUser={carritoUser} />}
            <hr />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {giftCards.loading
            ? "Cargando..."
            : giftCards.data.map((card) => (
                <GiftCard
                  key={card.id}
                  card={card}
                  addCarrito={addCarrito}
                  user={user}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default GiftCards;
