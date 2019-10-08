import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin-right: 10px;
`;

const Label = ({ text, id }) => {
  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
};

export default Label;
