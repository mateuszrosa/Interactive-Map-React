import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpan = styled.span`
  font-weight: 400;
`;

const Span = ({ children }) => <StyledSpan>{children}</StyledSpan>;

Span.propTypes = {
  children: PropTypes.string,
};

Span.defaultProps = {
  children: '',
};

export default Span;
