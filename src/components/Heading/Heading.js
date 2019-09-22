import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ type = "default", text }) => {
  return (
    <h1 className={type === "default" ? styles.default : styles.section}>
      {text}
    </h1>
  );
};

export default Heading;
