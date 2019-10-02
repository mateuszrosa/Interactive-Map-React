import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    color: #f00;
    text-decoration: underline;
    text-decoration-color: #f00;
  }
`;

const Link = ({ text, href }) => {
  return <StyledLink href={href}>{text}</StyledLink>;
};

export default Link;
