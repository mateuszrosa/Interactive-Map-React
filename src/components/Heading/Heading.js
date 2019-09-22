import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ size = "h1", type, text }) => {
  if (size === "h1") {
    return (
      <h1 className={type === "title" ? styles.title : styles.section}>
        {text}
      </h1>
    );
  } else {
    return (
      <h3 className={type === "title" ? styles.title : styles.section}>
        {text}
      </h3>
    );
  }
  // return (
  //   <h1 className={type === "default" ? styles.default : styles.section}>
  //     {text}
  //   </h1>
  // );
};

export default Heading;
