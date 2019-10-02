import React from "react";
import Paragraph from "components/Paragraph/Paragraph";
import Link from "components/Footer/Link/Link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph
        comp={<Link href="https://restcountries.eu" text="REST COUNTRIES" />}
      >
        based on<span> </span>
      </Paragraph>
    </StyledFooter>
  );
};

export default Footer;
