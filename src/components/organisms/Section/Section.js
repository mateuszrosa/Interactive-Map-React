import React from 'react';
import styled from 'styled-components';
import Info from 'components/molecules/Info/Info';
import Form from 'components/molecules/Form/Form';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

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
Section.propTypes = {
  click: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  info: PropTypes.shape({ root: PropTypes.string }).isRequired,
  input: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Section;
