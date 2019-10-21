import React from 'react';
import styled from 'styled-components';
import Img from 'components/atoms/Img/Img';
import Span from 'components/atoms/Span/Span';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledDiv = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;

const Info = ({ ...info }) => {
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
    img,
  } = info.info;
  return (
    <StyledDiv show={display}>
      <Paragraph>
        Name:<Span> {name}</Span>
      </Paragraph>
      <Paragraph>
        Region:
        <Span> {region}</Span>
      </Paragraph>
      <Paragraph>
        Subregion:
        <Span> {subregion}</Span>
      </Paragraph>
      <Paragraph>
        Native name:
        <Span> {nativeName}</Span>
      </Paragraph>
      <Paragraph>
        Capital:
        <Span> {capital}</Span>
      </Paragraph>
      <Paragraph>
        Language:
        <Span> {language}</Span>
      </Paragraph>
      <Paragraph>
        Currency:
        <Span> {currency}</Span>
      </Paragraph>
      <Paragraph>
        Population:
        <Span> {population}</Span>
      </Paragraph>
      <Img src={img} alt={name} />
    </StyledDiv>
  );
};

export default Info;