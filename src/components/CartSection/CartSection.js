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

    // const clearBasket = () => {
    //   dispatch({
    //     type: "CLEAR_CART",
    //   });
    // };

    return (
      <div>
        {/* {state.basket.length === 0 ? (
          <h1>Your basket is empty</h1>
        ) : ( */}
          <div className="cartContainer">
            {state.basket.map((item) => {
              const {
                id,
                name,
                img_url,
                description,
                isVeg,
                price,
                rating,
                sizeSelect,
                toppingName,
              } = item;
              console.log(item);
              return (
                <div className="cart" key={id}>
                  <img src={img_url} alt={name} width="100px" />
                  <div className="cartDetail">
                    <div>
                      <h1 className="cartHeader">{name} </h1>
                      <p className="desc">{description} </p>
                    </div>
                    <div>
                      <p className="isveg">{isVeg ? "Veg" : "Non Veg"} </p>
                      <div className="price-rating-wrap">
                        <p className="price">
                          Price: <span>INR {price} /-</span>{" "}
                        </p>
                        <p className="rating">
                          Rating: <span>{rating}/5</span>{" "}
                        </p>
                      </div>
                      <div className="sizeContentWrap">
                        Size:
                        <p className="SizeContent">
                          {sizeSelect ? sizeSelect : "Regular"}{" "}
                        </p>
                      </div>
                      <div className="toppingContentWrap">
                        <span>Topping:</span>
                        {toppingName.map((item) => (
                          <div className="toppingsContent">
                            <p>{item},</p>
                          </div>
                        ))}
                      </div>
                      <div className="cardBtnWrap">
                        <button
                          className="cardButton"
                          onClick={() => removeFromBasket(id)}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
        {/* } */}

        {/* {state.basket.length >= 1 && (
          <button onClick={clearBasket}>Clear Item</button>
        )}
        <h1>total INR {state.total} </h1> */}
      </div>
    );
}

export default CartSection;
