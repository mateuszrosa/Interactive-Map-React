import React from "react";
import Heading from "components/Heading/Heading";
import Img from "components/Section/Info/Img/Img";
import Span from "components/Section/Info/Span/Span";
import styles from "components/Section/Info/Info.module.scss";

const Info = props => {
  const {
    display,
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
    <div className={display ? styles.show : styles.info}>
      <Heading text={`Name: `} comp={<Span text={name} />} />
      <Heading text={`Region: `} comp={<Span text={region} />} />
      <Heading text={`Subregion: `} comp={<Span text={subregion} />} />
      <Heading text={`Native name: `} comp={<Span text={nativeName} />} />
      <Heading text={`Capital: `} comp={<Span text={capital} />} />
      <Heading text={`Language: `} comp={<Span text={language} />} />
      <Heading text={`Currency: `} comp={<Span text={currency} />} />
      <Heading text={`Population: `} comp={<Span text={population} />} />
      <Img src={img} />
    </div>
  );
};

export default Info;
