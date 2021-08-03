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
                <div key={index} className='sizeWrap'>
                  <p>{item.size}</p>
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
          <p>no size available</p>
        )
      )}
    </div>
  );
}

export default Size;
