import React from "react";
import HashLoader from "react-spinners/HashLoader";

import "./loading.css";

const Loading = ({ loading }) => {
  return (
    <div className="load">
      <HashLoader
        color={"#FFB800"}
        loading={loading}
        size={110}
        className="load"
      />
    </div>
  );
};

export default Loading;
