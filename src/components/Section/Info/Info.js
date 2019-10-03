import React from "react";
import AppContext from "context";
import Paragraph from "components/Paragraph/Paragraph";
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
    <AppContext.Consumer>
      {context => (
        <div className={display ? styles.show : styles.info}>
          <Paragraph comp={<Span text={name} />}>Name: </Paragraph>
          <Paragraph comp={<Span text={region} />}>Region: </Paragraph>
          <Paragraph comp={<Span text={subregion} />}>Subregion: </Paragraph>
          <Paragraph comp={<Span text={nativeName} />}>Native name: </Paragraph>
          <Paragraph comp={<Span text={capital} />}>Capital: </Paragraph>
          <Paragraph comp={<Span text={language} />}>Language: </Paragraph>
          <Paragraph comp={<Span text={currency} />}>Currency: </Paragraph>
          <Paragraph comp={<Span text={population} />}>Population: </Paragraph>
          <Img src={img} />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Info;
