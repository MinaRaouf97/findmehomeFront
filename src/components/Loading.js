import React from "react";
import loadingGif from "../resources/images/loading.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Data is Loading....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
