import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./cardmodal.css";
import { useGlobalContext } from "../../context/context";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "400px",
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
}) {
    const classes = useStyles();
    


  const { dispatch } = useGlobalContext();
  const addItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, img_url, description, isVeg, price, rating },
    });
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
                <div className="modalBtnWrap">
                  <button className="modalButton" onClick={addItem}>
                    Add Item
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

export default CardModal
