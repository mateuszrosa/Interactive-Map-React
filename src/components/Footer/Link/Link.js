import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 800;

  &:hover {
    color: #f00;
    text-decoration: underline;
    text-decoration-color: #f00;
  }
`;

const Link = ({ children, href }) => (
  <StyledLink href={href} target="_blank">
    {children}
  </StyledLink>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
