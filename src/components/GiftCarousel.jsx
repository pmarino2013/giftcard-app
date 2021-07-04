import React from "react";

import { Carousel } from "react-bootstrap";
import cardgif from "../img/gift-card.gif";
const GiftCarousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={cardgif} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={cardgif} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={cardgif} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default GiftCarousel;