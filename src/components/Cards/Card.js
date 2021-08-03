import React from "react";
// import { useGlobalContext } from "../../context/context";
import CardModal from "../CardModal/CardModal";
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
  // const { dispatch } = useGlobalContext();

  // const addItem = () => {
  //   dispatch({
  //     type: "ADD_ITEM",
  //     payload: { id, name, img_url, description, isVeg, price, rating },
  //   });
  //   // alert("item added to cart");
  // };

   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };

  return (
    <div className="cardsContainer">
      <div className="cardWrapper">
        <div className="card">
          <img src={img_url} alt={name} width="100px" />
          <div className="cardDetail">
            <div>
              <h1 className="cardHeader">{name} </h1>
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
              <div className="cardBtnWrap">
                <button className="cardButton" onClick={handleOpen}>
                  Add
                </button>
                <CardModal
                  open={open}
                  setOpen={setOpen}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
