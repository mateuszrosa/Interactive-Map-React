import React from 'react';
import Paragraph from 'components/Paragraph/Paragraph';
import Link from 'components/Footer/Link/Link';
import Span from 'components/Span/Span';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Paragraph comp={<Link href="https://restcountries.eu" text="REST COUNTRIES" />}>
        <Span>based on</Span>
        <Span> </Span>
      </Paragraph>
    </StyledFooter>
  );
};

export default Footer;
