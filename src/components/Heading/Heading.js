import React from "react";
// import styles from "components/Heading/Heading.module.scss";
import styled from "styled-components";

let StyledHeading = styled.h1`
  margin: 0 auto 0 auto;
  text-align: center;
  font-size: ${props => (props.type === "title" ? "60px" : "24px")};
`;

const Heading = ({ children, type }) => {
  return <StyledHeading type={type}>{children}</StyledHeading>;
};

export default Heading;
