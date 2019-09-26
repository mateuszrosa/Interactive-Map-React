import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const { type, click, input, placeholder } = props;
  console.log(input);
  if (input === undefined) {
    return <input type={type} />;
  }
  if (input === true) {
    return <input onClick={click} type={type} placeholder={placeholder} />;
  } else {
    return (
      <input
        className={styles.error}
        onClick={click}
        type={type}
        placeholder={placeholder}
      />
    );
  }
};

export default Input;
