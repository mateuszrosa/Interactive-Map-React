import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeading = styled.h1`
  margin: 0 auto 0 auto;
  text-align: center;
  font-size: ${props => (props.type === 'title' ? '30px' : '14px')};
  @media (min-width: 375px) {
    font-size: ${props => (props.type === 'title' ? '60px' : '24px')};
  }
`;

const Heading = ({ children, type }) => <StyledHeading type={type}>{children}</StyledHeading>;

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Heading.defaultProps = {
  type: '',
};

export default Heading;
