import React from "react";
import styles from "./Input.module.scss";

const Input = ({ type }) => {
  return <input type={type} placeholder="Write country name:" />;
};

export default Input;
