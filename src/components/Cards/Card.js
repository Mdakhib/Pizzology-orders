import React from "react";
import "./cards.css";

export const Card = ({
  id,
  name,
  description,
  isVeg,
  rating,
  price,
  img_url,
}) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <h1>{name} </h1>
        <img src={img_url} alt={name} width='100px' />
        <p>{description} </p>
        <p>{isVeg ? "Veg" : "Non Veg"} </p>
        <p>{price} </p>
        <p>{rating} </p>
        <button>add item</button>
      </div>
    </div>
  );
};
