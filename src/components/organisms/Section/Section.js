import React from 'react';
import styled from 'styled-components';
import Info from 'components/molecules/Info/Info';
import Form from 'components/molecules/Form/Form';
import Heading from 'components/atoms/Heading/Heading';

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
    height: auto;
    position: absolute;
    left: 5px;
    top: 15%;
    background-color: #dedfe0;
  }
  @media (min-width: 1440px) {
    width: 19%;
    top: 15%;
  }
`;

const Section = () => (
  <StyledSection>
    <Heading>Find country and information about it</Heading>
    <Form />
    <Info />
  </StyledSection>
);

export default Section;
