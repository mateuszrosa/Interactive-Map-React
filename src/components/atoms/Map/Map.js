import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import map from 'images/worldHigh3.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 85%;
  }
  @media (min-width: 1440px) {
    width: 70%;
  }
  border: 1px solid black;
  margin: 0 auto;
`;

const Map = ({ click }) => (
  <StyledWrapper>
    <SVG src={map} onClick={click} viewBox="0 0 1050 650" />
  </StyledWrapper>
);

Map.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Map;
