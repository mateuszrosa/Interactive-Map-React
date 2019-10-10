import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 50%;
  display: block;
  margin: 10px auto;
  box-shadow: 0 0 3px 3px gray;
`;

const Img = ({ src, alt }) => <StyledImg src={src} alt={alt} />;

export default Img;
