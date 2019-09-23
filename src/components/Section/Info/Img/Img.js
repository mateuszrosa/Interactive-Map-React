import React from "react";
import "./Img.module.scss";

const Img = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Img;
