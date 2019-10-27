import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import map from 'images/worldHigh3.svg';
import PropTypes from 'prop-types';

const StyledSVG = styled(SVG)`
  display: block;
  margin: 80px auto;
  width: 55%;
  height: 70%;
  transform: scale(1.1);
`;

const Map = ({ click }) => <StyledSVG src={map} onClick={click} />;

Map.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Map;
