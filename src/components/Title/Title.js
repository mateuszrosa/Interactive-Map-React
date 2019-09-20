import React from "react";
// import styleds from "styled-components";
import "./Title.module.scss";

const Title = ({ type = "default" }) => {
  {
    console.log(type);
  }
  return <h1>Interactive World Map React</h1>;
};

export default Title;
