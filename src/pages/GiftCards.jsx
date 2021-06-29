import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GiftCard from "../components/GiftCard";
// import Menu from "../components/Menu";
const GiftCards = () => {
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

  const getCards = async () => {
    let resp = await fetch("http://localhost:3004/giftcards");
    let datos = await resp.json();

    return datos;
  };

  return (
    <>
      {/* <Menu /> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>GiftCard</h1>
            <hr />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {giftCards.loading
            ? "Cargando..."
            : giftCards.data.map((card) => (
                <GiftCard key={card.id} card={card} />
              ))}
        </div>
      </div>
    </>
  );
};

export default GiftCards;
