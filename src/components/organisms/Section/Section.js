import React from 'react';
import styled from 'styled-components';
import Info from 'components/molecules/Info/Info';
import Form from 'components/molecules/Form/Form';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 20%;
    height: auto;
    position: absolute;
    left: 0;
    top: 20%;
  }
  @media (min-width: 1440px) {
    width: 23%;
    top: 15%;
  }
`;

const Section = ({
  click,
  submit,
  option,
  info,
  input,
  id,
  placeholder,
  list,
  select,
  selected,
  type,
}) => (
  <StyledSection>
    <Heading>Find country and information about it</Heading>
    <Form
      select={select}
      selected={selected}
      click={click}
      submit={submit}
      option={option}
      type={type}
      info={info}
      input={input}
      placeholder={placeholder}
      id={id}
      list={list}
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
