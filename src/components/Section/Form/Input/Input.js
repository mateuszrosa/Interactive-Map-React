import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const { type, click, input, placeholder } = props;
  console.log(input);
  if (input === undefined) {
    return <input type={type} />;
  }
  return (
    <input
      className={input === false ? styles.error : styles.normal}
      onClick={click}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
