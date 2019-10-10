import React from 'react';
import styled from 'styled-components';
import Info from './Info/Info';
import Form from './Form/Form';
import Heading from '../Heading/Heading';

const StyledSection = styled.section`
  position: absolute;
  left: 0;
  top: 20%;
  width: 23%;
`;

const Section = ({
 click, submit, info, input, id, placeholder 
}) => (
  <StyledSection>
    <Heading>Find information about that country</Heading>
    <Form
      click={click}
      submit={submit}
      info={info}
      input={input}
      placeholder={placeholder}
      id={id}
    />
    <Info info={info} />
  </StyledSection>
);

export default Section;
