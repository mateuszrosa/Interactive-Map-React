import React from "react";
import styles from "components/Heading/Heading.module.scss";

const Heading = ({ children, size = "h1", type, comp }) => {
  const Tag = size;
  return (
    <Tag className={type === "title" ? styles.title : styles.section}>
      {children}
      {comp}
    </Tag>
  );
};

export default Heading;
