import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ size = "h1", type, text, comp }) => {
  if (size === "h1") {
    return (
      <h1 className={type === "title" ? styles.title : styles.section}>
        {text}
        {comp}
      </h1>
    );
  } else {
    return (
      <h3 className={type === "title" ? styles.title : styles.section}>
        {text}
        {comp}
      </h3>
    );
  }
};

export default Heading;
