import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: 800;
`;

const Paragraph = ({ children, comp }) => {
  return (
    <StyledParagraph>
      {children} {comp}
    </StyledParagraph>
  );
};

export default Paragraph;
