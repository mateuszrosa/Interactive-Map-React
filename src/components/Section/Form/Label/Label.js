import React from "react";
import "components/Section/Form/Label/Label.module.scss";

const Label = ({ text, id }) => {
  return <label htmlFor={id}>{text}</label>;
};

export default Label;
