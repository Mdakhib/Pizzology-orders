import React from "react";
import { useGlobalContext } from "../../context/context";
import "./cartsection.css";

function CartSection() {
    const { dispatch, state } = useGlobalContext();

    const removeFromBasket = (id) => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: id,
      });
    };

    const clearBasket = () => {
      dispatch({
        type: "CLEAR_CART",
      });
    };

    return (
      <div>
        {state.basket.length === 0 ? (
          <h1>Your basket is empty</h1>
        ) : (
          <div className="cartContainer">
            {state.basket.map((item) => {
              const { id, name, img_url, description, isVeg, price, rating } =
                item;
              console.log(item);
              return (
                <div className="cart" key={id}>
                  <h1>{name} </h1>
                  <img src={img_url} alt={name} width="100px" />
                  <p>{description} </p>
                  <p>{isVeg ? "Veg" : "Non Veg"} </p>
                  <p>{price} </p>
                  <p>{rating} </p>
                  <button onClick={() => removeFromBasket(id)}>remove</button>
                </div>
              );
            })}
          </div>
        )}

        {state.basket.length >= 1 && (
          <button onClick={clearBasket}>Clear Item</button>
        )}
      </div>
    );
}

export default CartSection;
