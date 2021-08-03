import React from 'react'

function Topping({ toppings, toppingName, setToppingName }) {
  return (
    <div>
      {toppings.map((radio) =>
        radio.isRadio ? (
          <div>
            {radio.title}
            {radio.items.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.name} </p>
                  <input
                    type="checkbox"
                    value={toppingName}
                    onChange={() => setToppingName([...toppingName, item.name])}
                  />
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

export default Topping
