import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Select from 'components/atoms/Select/Select';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  text-align: center;
  display: flex;
  justify-content: center;
  @media (min-width: 375px) {
    display: block;
  }
`;

const Form = ({ click, submit, input, id, placeholder, select }) => {
  return (
    <StyledForm autoComplete="off" onSubmit={submit}>
      <Label htmlFor={id}>Write country name:</Label>
      <Input
        onClick={click}
        type="text"
        error={input ? null : 'error'}
        placeholder={placeholder}
        id={id}
      />
      <Select select={select} />
      <Input type="submit" submit value="Search" />
    </StyledForm>
  );
};

Form.propTypes = {
  click: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  input: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Form;
