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
      <Heading comp={<Span text={name} />}>Name: </Heading>
      <Heading comp={<Span text={region} />}>Region: </Heading>
      <Heading comp={<Span text={subregion} />}>Subregion: </Heading>
      <Heading comp={<Span text={nativeName} />}>Native name: </Heading>
      <Heading comp={<Span text={capital} />}>Capital: </Heading>
      <Heading comp={<Span text={language} />}>Language: </Heading>
      <Heading comp={<Span text={currency} />}>Currency: </Heading>
      <Heading comp={<Span text={population} />}>Population: </Heading>
      <Img src={img} />
    </div>
  );
};

export default Info;
