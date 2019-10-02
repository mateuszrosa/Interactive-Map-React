import React from "react";
import SVG from "react-inlinesvg";
import map from "images/worldHigh3.svg";
import styled from "styled-components";

const StyledSVG = styled(SVG)`
  display: block;
  margin: 80px auto;
  width: 55%;
  height: 75vh;
  transform: scale(1.1);
`;

const Map = props => {
  return <StyledSVG src={map} onClick={props.click} />;
};

export default Map;
