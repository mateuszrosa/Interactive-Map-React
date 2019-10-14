import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from './Img/Img';
import Span from '../../Span/Span';
import Paragraph from '../../Paragraph/Paragraph';

const StyledDiv = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
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
    img,
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

Info.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Info;
