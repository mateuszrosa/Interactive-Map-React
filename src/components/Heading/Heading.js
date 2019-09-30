import React from "react";
import styles from "components/Heading/Heading.module.scss";

const Heading = ({ children, size = "h1", comp, className1 }) => {
  const Tag = size;
  return (
    <Tag className={className1 === "title" ? styles.title : null}>
      {children}
      {comp}
    </Tag>
  );
};

export default Heading;
