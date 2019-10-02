import React from "react";
// import styles from "components/Heading/Heading.module.scss";
import styled, { css } from "styled-components";

const Heading = ({ children, size = "h1", comp, className1 }) => {
  const Tag = size;
  return (
    <Tag>
      {children}
      {comp}
    </Tag>
  );
};

export default Heading;
