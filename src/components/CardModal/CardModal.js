import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./cardmodal.css";
import { useGlobalContext } from "../../context/context";
import Size from "../SizeSection/Size";
import Topping from "../ToppingSection/Topping";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "360px",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #FFB800",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1.5),
    borderTopLeftRadius: "30px 30px",
    borderTopRightRadius: "30px 30px",
    borderBottomLeftRadius: "10px 10px",
    borderBottomRightRadius: "10px 10px",
    margin: "0 20px",
  },
}));

function CardModal({
  open,
  handleClose,
  id,
  name,
  description,
  isVeg,
  rating,
  price,
  img_url,
  size,
  toppings,
}) {
  const classes = useStyles();

  const [sizeSelect, setSizeSelect] = useState("");
  const [toppingName, setToppingName] = useState([]);
const [quantity, setQuantity] = useState(1);
const [isRadio] = toppings;
const [sizeIsRadio] = size;
console.log(size);
// console.log(sizeIsRadio);

const { dispatch } = useGlobalContext();
const addItem = () => {
  dispatch({
    type: "ADD_ITEM",
    payload: {
      id,
      name,
      img_url,
      description,
      isVeg,
      price,
      rating,
      sizeSelect,
      toppingName,
      quantity,
    },
  });
  alert("Item Added");
};

return (
  <div>
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img className="modalImg" src={img_url} alt="" />
            <div className="modalWrap">
              <p className="modalCardName">{name} </p>
              <p className="modalDesc">{description} </p>
              <p className="modalIsVeg">{isVeg ? "Veg" : "Non Veg"} </p>
              <div className="price-rating-wrap">
                <p className="modalPrice">
                  Price: <span>INR {price} /-</span>{" "}
                </p>
                <p className="modalRating">
                  Rating: <span>{rating}/5</span>{" "}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #FFB800",
                      padding: "2px 20px",
                      borderRadius: "5px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <p style={{ padding: "0 15px",fontWeight:'700' }}>{quantity}</p>
                  <button
                    style={{
                      background: "transparent",
                      border: "1px solid #FFB800",
                      padding: "2px 20px",
                      borderRadius: "5px",
                      fontSize: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                {sizeIsRadio.isRadio ? (
                  <Size size={size} setSize={setSizeSelect} />
                ) : (
                  <p className="errorMsg">No size available</p>
                )}
              </div>
              <div>
                {isRadio.isRadio ? (
                  <Topping
                    toppings={toppings}
                    toppingName={toppingName}
                    setToppingName={setToppingName}
                  />
                ) : (
                  <p className="errorMsg">No Toppings Available</p>
                )}
              </div>
              <div className="modalBtnWrap">
                <button
                  className="modalButton"
                  onClose={handleClose}
                  onClick={() => {
                    addItem();
                    handleClose();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  </div>
);
}

export default CardModal;
