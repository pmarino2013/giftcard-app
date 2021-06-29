import React from "react";
import GiftCard from "../components/GiftCard";
// import Menu from "../components/Menu";
const GiftCards = () => {
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
        <div className="row">
          <GiftCard />
        </div>
      </div>
    </>
  );
};

export default GiftCards;
