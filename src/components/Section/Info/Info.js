import React from "react";
import Heading from "../../Heading/Heading";
import Img from "./Img/Img";
import "./Info.module.scss";

const Info = props => {
  const {
    name,
    region,
    subregion,
    nativeName,
    capital,
    language,
    currency,
    population,
    img
  } = props.info;
  return (
    <div className="info">
      <Heading text={`Name: ${name}`} />
      <Heading text={`Region: ${region}`} />
      <Heading text={`Subregion: ${subregion}`} />
      <Heading text={`Native name: ${nativeName}`} />
      <Heading text={`Capital: ${capital}`} />
      <Heading text={`Language: ${language}`} />
      <Heading text={`Currency: ${currency}`} />
      <Heading text={`Population: ${population}`} />
      <Img src={img} />
    </div>
  );
};

export default Info;
