import React from "react";
import "./toping.css";

function Topping({ toppings, toppingName, setToppingName }) {
  return (
    <div>
      {toppings.map((radio) =>
        radio.isRadio ? (
          <div>
            <p className='toppingTitle'>{radio.title}</p>
            {radio.items.map((item, index) => {
              return (
                <div key={index} className="toppingContainer">
                  <div className="toppingWrap">
                    <p className='toppingContent'>{item.name} </p>
                    <input
                      type="checkbox"
                      value={toppingName}
                      onChange={() =>
                        setToppingName([...toppingName, item.name])
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>no Toppings available</p>
        )
      )}
    </div>
  );
}

export default Topping;
