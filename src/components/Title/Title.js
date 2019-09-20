import React from "react";
import styles from "./Title.module.scss";

const Title = ({ type = "default" }) => {
  return (
    <h1 className={type === "default" ? styles.default : styles.section}>
      Interactive World Map React
    </h1>
  );
};

export default Title;
