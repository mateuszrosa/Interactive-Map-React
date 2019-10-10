import React from 'react';
import styled from 'styled-components';
import Info from 'components/Section/Info/Info';
import Form from 'components/Section/Form/Form';
import Heading from 'components/Heading/Heading';

const StyledSection = styled.section`
  position: absolute;
  left: 0;
  top: 20%;
  width: 23%;
`;

const Section = ({ click, submit, info, input, id, placeholder }) => (
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
