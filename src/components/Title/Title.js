import React from "react";
import styles from "./Title.module.scss";

const Title = ({ type = "default", text }) => {
  return (
    <h1 className={type === "default" ? styles.default : styles.section}>
      {text}
    </h1>
  );
};

export default Title;
