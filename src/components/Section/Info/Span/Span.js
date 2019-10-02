import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-weight: 400;
`;

const Span = ({ text }) => {
  return <StyledSpan>{text}</StyledSpan>;
};

export default Span;
