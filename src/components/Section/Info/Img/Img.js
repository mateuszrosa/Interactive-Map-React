import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  width: 50%;
  display: block;
  margin: 10px auto;
  box-shadow: 0 0 3px 3px gray;
`;

const Img = ({ src, alt }) => <StyledImg src={src} alt={alt} />;

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Img.defaultProps = {
  src: '',
  alt: '',
};

export default Img;
