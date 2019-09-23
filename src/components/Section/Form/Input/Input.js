import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type, click }) => {
  return (
    <input onClick={click} type={type} placeholder="Write country name:" />
  );
};

export default Input;
