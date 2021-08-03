import React from "react";

function Size({ size, setSize }) {
  return (
    <div>
      {size.map((radio) =>
        radio.isRadio ? (
          <div>
            {radio.title}
            {radio.items.map((item, index) => {
              return (
                <div key={index}>
                  {item.size}
                  <input
                    type="radio"
                    value={item.size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h1>no size available</h1>
        )
      )}
    </div>
  );
}

export default Size;
