import React from 'react'
import CartSection from "../components/CartSection/CartSection";
import { Header } from "../components/Header/Header";
import { useGlobalContext } from "../context/context";

export const Cart = () => {
  const { dispatch, state } = useGlobalContext();

  const clearBasket = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <div>
      <Header />
      {state.basket.length === 0 ? (
        <h1>Your basket is empty</h1>
      ) : (
        <CartSection />
      )}
      {state.basket.length >= 1 && (
        <button onClick={clearBasket}>Clear Item</button>
      )}
      <h1>total INR {state.total} </h1>
    </div>
  );
};
