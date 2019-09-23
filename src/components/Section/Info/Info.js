import React from "react";
import Heading from "../../Heading/Heading";
import Img from "./Img/Img";
import "./Info.module.scss";

const Info = ({ click }) => {
  return (
    <div className="info" onClick={click}>
      <Heading />
      <Heading />
      <Heading />
      <Heading />
      <Heading />
      <Heading />
      <Heading />
      <Heading />
      <Img />
    </div>
  );
};

export default Info;
