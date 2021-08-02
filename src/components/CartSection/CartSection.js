import React from "react";
import { useGlobalContext } from "../../context/context";
import "./cartsection.css";

function CartSection() {
  const { dispatch, state } = useGlobalContext();

  return (
    <div className="cartContainer">
      {state.basket.map((item) => {
        const { id, name, img_url, description, isVeg, price, rating } = item;
        console.log(item);
        return (
          <div className="cart" key={id}>
              <h1>{name} </h1>
              <img src={img_url} alt={name} width="100px" />
              <p>{description} </p>
              <p>{isVeg ? "Veg" : "Non Veg"} </p>
              <p>{price} </p>
              <p>{rating} </p>
              <button>remove</button>
            </div>
        );
      })}
    </div>
  );
}

export default CartSection;
