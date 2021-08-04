import React from "react";
import "./size.css";

function Size({ size, setSize }) {
  return (
    <div>
      {size.map((radio) =>
        radio.isRadio ? (
          <div >
            <p className="sizeTitle">{radio.title}</p>

            {radio.items.map((item, index) => {
              return (
                <div key={index} className="sizeContainer">
                  <div  className="sizeWrap">
                    <p className='sizeContent'>{item.size}</p>
                    <input
                      type="radio"
                      name='size'
                      value={item.size}
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </div>
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
