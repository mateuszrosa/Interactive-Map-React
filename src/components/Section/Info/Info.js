import React from "react";
import Heading from "../../Heading/Heading";
import "./Info.module.scss";

const Info = ({ click }) => {
  return (
    <div className="info" onClick={click}>
      <Heading text="test" />
    </div>
  );
};

export default Info;
