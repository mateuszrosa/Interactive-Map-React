import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-weight: 400;
`;

const Span = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Span;
