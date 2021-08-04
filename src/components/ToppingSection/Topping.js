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
          <h1 >no Toppings available</h1>
        )
      )}
    </div>
  );
}

export default Topping;
