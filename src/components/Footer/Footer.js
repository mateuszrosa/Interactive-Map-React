import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Link from 'components/Footer/Link/Link';
import Span from 'components/Span/Span';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <StyledFooter>
    <Paragraph comp={<Link href="https://restcountries.eu">REST COUNTRIES</Link>}>
      <Span>based on</Span>
      <Span> </Span>
    </Paragraph>
  </StyledFooter>
);

export default Footer;
