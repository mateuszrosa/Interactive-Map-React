import React from "react";
import SVG from "react-inlinesvg";
import map from "images/worldHigh3.svg";
import styled from "styled-components";

const StyledSVG = styled(SVG)`
  display: block;
  margin: 80px auto;
  width: 100%;
  height: 65vh;
  transform: scale(0.6);
  @media (min-width: 375px) {
    transform: scale(1.1);
    width: 55%;
  }
`;

const Map = props => {
  return <StyledSVG src={map} onClick={props.click} />;
};

export default Map;
