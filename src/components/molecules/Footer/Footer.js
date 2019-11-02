import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Link from 'components/atoms/Link/Link';
import Span from 'components/atoms/Span/Span';

const StyledFooter = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  ${show =>
    show &&
    css`
      @media (min-width: 1024px) {
        position: absolute;
        bottom: 0;
      }
    `}
`;

const Footer = ({ ...info }) => {
  const { display } = info.info;
  return (
    <StyledFooter show={display}>
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
