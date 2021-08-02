import React from "react";
import { useGlobalContext } from "../../context/context";
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
  const { dispatch } = useGlobalContext();


  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, img_url, description, isVeg, price, rating },
    });
    // alert("item added to cart");
  };


  return (
    <div className="cardContainer">
      <div className="card">
        <h1>{name} </h1>
        <img src={img_url} alt={name} width="100px" />
        <p>{description} </p>
        <p>{isVeg ? "Veg" : "Non Veg"} </p>
        <p>{price} </p>
        <p>{rating} </p>
        <button onClick={addItem}>add item</button>
      </div>
    </div>
  );
};
