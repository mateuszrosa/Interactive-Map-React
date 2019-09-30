import React from "react";
import styles from "components/Section/Form/Input/Input.module.scss";

const Input = props => {
  const { type, text, click, input, id, placeholder } = props;
  if (input === undefined) {
    return <input type={type} value={text} />;
  }
  if (input === true) {
    return (
      <input onClick={click} type={type} placeholder={placeholder} id={id} />
    );
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
