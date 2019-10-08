import React from "react";
import Paragraph from "components/Paragraph/Paragraph";
import Img from "components/Section/Info/Img/Img";
import Span from "components/Span/Span";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`;

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
    <StyledDiv show={display}>
      <Paragraph comp={<Span text={name} />}>Name: </Paragraph>
      <Paragraph comp={<Span text={region} />}>Region: </Paragraph>
      <Paragraph comp={<Span text={subregion} />}>Subregion: </Paragraph>
      <Paragraph comp={<Span text={nativeName} />}>Native name: </Paragraph>
      <Paragraph comp={<Span text={capital} />}>Capital: </Paragraph>
      <Paragraph comp={<Span text={language} />}>Language: </Paragraph>
      <Paragraph comp={<Span text={currency} />}>Currency: </Paragraph>
      <Paragraph comp={<Span text={population} />}>Population: </Paragraph>
      <Img src={img} />
    </StyledDiv>
  );
};

export default Info;
