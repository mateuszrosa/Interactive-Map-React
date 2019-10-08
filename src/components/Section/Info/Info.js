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
      <Paragraph comp={<Span>{name}</Span>}>Name: </Paragraph>
      <Paragraph comp={<Span>{region}</Span>}>Region: </Paragraph>
      <Paragraph comp={<Span>{subregion}</Span>}>Subregion: </Paragraph>
      <Paragraph comp={<Span>{nativeName}</Span>}>Native name: </Paragraph>
      <Paragraph comp={<Span>{capital}</Span>}>Capital: </Paragraph>
      <Paragraph comp={<Span>{language}</Span>}>Language: </Paragraph>
      <Paragraph comp={<Span>{currency}</Span>}>Currency: </Paragraph>
      <Paragraph comp={<Span>{population}</Span>}>Population: </Paragraph>
      <Img src={img} />
    </StyledDiv>
  );
};

export default Info;
