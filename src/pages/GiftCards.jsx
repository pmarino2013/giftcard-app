import React, { useEffect, useState } from "react";
import { postCarrito } from "../helpers/carrito";

import GiftCard from "../components/GiftCard";

const GiftCards = () => {
  let user = JSON.parse(localStorage.getItem("usuario")) || null;
  const [carrito, setCarrito] = useState(null);
  const [giftCards, setGiftCards] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCards().then((respuesta) => {
      console.log(respuesta);
      setGiftCards({
        data: respuesta,
        loading: false,
      });
    });
  }, []);

  useEffect(() => {
    if (carrito) {
      postCarrito(carrito).then((respuesta) => {
        console.log(respuesta);
      });
    }
  }, [carrito]);

  const getCards = async () => {
    let resp = await fetch("http://localhost:3004/giftcards");
    let datos = await resp.json();

    return datos;
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
