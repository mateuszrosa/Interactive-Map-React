import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Link from 'components/atoms/Link/Link';
import Span from 'components/atoms/Span/Span';

const StyledFooter = styled.footer`
  width: 100%;
  margin-bottom: 0;
`;

const Footer = () => {
  return (
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
};

export default Footer;
