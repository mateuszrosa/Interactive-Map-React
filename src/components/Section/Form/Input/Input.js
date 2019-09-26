import React from "react";
import styles from "./Input.module.scss";

const Input = props => {
  const { type, click, input } = props;
  return (
    <input
      className={input === false ? styles.error : styles.normal}
      onClick={click}
      type={type}
      placeholder="Write country name:"
    />
  );
  // if (input === "undefined") {
  //   return (
  //     <input onClick={click} type={type} placeholder="Write country name:" />
  //   );
  // } else {
  //   console.log("input2");
  //   return (
  //     <input
  //       className={input ? styles.normal : styles.error}
  //       onClick={click}
  //       type={type}
  //       placeholder="Write country name:"
  //     />
  //   );
  // }
};

export default Input;
