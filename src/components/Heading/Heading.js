import React from "react";
// import styles from "components/Heading/Heading.module.scss";
import styled from "styled-components";

let StyledHeading = styled.h1`
  margin: 0 auto 0 auto;
  text-align: center;
  font-size: 60px;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
