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
        <h1
          style={{
            textAlign: "center",
            textTransform: "capitalize",
            color: "#FFB800",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          Your basket is empty
        </h1>
      ) : (
        <CartSection />
      )}
      {state.basket.length >= 1 && (
        <div className="clearBtnWrap">
          <button className="clearBtbn" onClick={clearBasket}>
            Clear Item
          </button>
        </div>
      )}
      <div>
        <hr style={{ marginBottom: "15px", marginTop: "15px" }} />
        <div className="totalPriceWrap">
          <h1 className="totalPrice">
            total <span>₹ {state.total}/-</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};
