import React from "react";
import Heading from "../../Heading/Heading";
import Img from "./Img/Img";
import "./Info.module.scss";

const Info = props => {
  const { name } = props.info;
  console.log(name);
  return (
    <div className="info">
      <Heading text={`Name: ${name}`} />
    </div>
  );
};

export default Info;
