import React from "react";
import SVG from "react-inlinesvg";
import map from "../../images/worldHigh3.svg";
import "./Map.module.scss";

const Map = () => {
  return <SVG src={map} />;
};

export default Map;
