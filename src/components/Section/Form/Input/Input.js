import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const { type, text, click, input, placeholder } = props;
  console.log(text);
  if (input === undefined) {
    return <input type={type} value={text} />;
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
