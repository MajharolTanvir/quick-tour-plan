import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <div className="outer"></div>
      <div className="middle"></div>
      <div className="inner"></div>
    </div>
  );
};

export default Loading;
