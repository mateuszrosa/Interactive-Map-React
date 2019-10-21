import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Link from 'components/atoms/Link/Link';
import Span from 'components/atoms/Span/Span';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <StyledFooter>
    <Paragraph footer>
      based on
      <Span> </Span>
      <Link href="https://restcountries.eu" target="_blank">
        REST COUNTRIES
      </Link>
    </Paragraph>
  </StyledFooter>
);

export default Footer;
