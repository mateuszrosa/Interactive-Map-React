import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import map from 'images/worldHigh3.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 73%;
    margin: 0 270px;
  }
  @media screen and (min-width: 1440px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const Map = ({ click }) => (
  <StyledWrapper>
    <SVG src={map} onClick={click} viewBox="0 0 1010 650" />
  </StyledWrapper>
);

Map.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Map;
