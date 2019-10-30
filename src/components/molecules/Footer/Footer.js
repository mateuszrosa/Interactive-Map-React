import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Link from 'components/atoms/Link/Link';
import Span from 'components/atoms/Span/Span';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  ${({ show }) =>
    show &&
    css`
      position: relative;
      margin-bottom: 0;
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
