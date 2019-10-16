import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from './Img/Img';
import Span from '../../Span/Span';
import Paragraph from '../../Paragraph/Paragraph';

const StyledDiv = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;

const Info = ({ info }) => {
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
  } = info;
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
      <Img src={img} alt={name} />
    </StyledDiv>
  );
};

Info.propTypes = {
  display: PropTypes.bool,
  name: PropTypes.string,
  region: PropTypes.string,
  subregion: PropTypes.string,
  nativeName: PropTypes.string,
  capital: PropTypes.string,
  language: PropTypes.string,
  currency: PropTypes.string,
  population: PropTypes.string,
  img: PropTypes.string,
};

Info.defaultProps = {
  display: false,
  name: '',
  region: '',
  subregion: '',
  nativeName: '',
  capital: '',
  language: '',
  currency: '',
  population: '',
  img: '',
};

export default Info;
