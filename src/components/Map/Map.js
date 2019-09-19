import React from "react";
import SVG from "react-inlinesvg";
import map from "../../images/worldHigh3.svg";
import "./Map.module.scss";

// class Map extends React.Component {
//   state = {};
//   handleClick = e => {
//     console.log(e.target);
//   };
//   render() {
//     return <SVG src={map} onClick={this.handleClick} />;
//   }
// }

const Map = () => {
  return <SVG src={map} />;
};

export default Map;
