import React from "react";
import "./Label.module.scss";

const Label = ({ text, id }) => {
  console.log(id);
  return <label htmlFor={id}>{text}</label>;
};

export default Label;
