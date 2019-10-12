import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import map from 'images/worldHigh3.svg';

const StyledSVG = styled(SVG)`
  display: block;
  margin: 80px auto;
  width: 55%;
  height: 65vh;
  transform: scale(1.1);
`;

const Map = ({ click }) => <StyledSVG src={map} onClick={click} />;

export default Map;
