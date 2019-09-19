import React from "react";
import SVG from "react-inlinesvg";
import map from "../../images/worldHigh3.svg";
import "./Map.module.scss";

const Map = props => {
  return <SVG src={map} onClick={props.click} />;
};

export default Map;
