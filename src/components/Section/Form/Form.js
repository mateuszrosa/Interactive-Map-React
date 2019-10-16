import React from 'react';
import styled from 'styled-components';
import Input from 'components/Section/Form/Input/Input';
import Label from 'components/Section/Form/Label/Label';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  text-align: center;
`;

const Form = ({ click, submit, input, id, placeholder }) => (
  <StyledForm autoComplete="off" onSubmit={submit}>
    <Label id={id} text="Write country name" />
    <Input click={click} type="text" input={input} placeholder={placeholder} id={id} />
    <Input type="submit" text="Search" />
  </StyledForm>
);

Form.propTypes = {
  click: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  input: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Form;
