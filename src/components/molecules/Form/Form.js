import React from 'react';
import styled from 'styled-components';
import List from 'components/molecules/List/List';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Select from 'components/atoms/Select/Select';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 375px) {
    display: block;
  }
`;

const Form = ({ click, submit, input, id, placeholder, list, select, selected, type }) => {
  return (
    <StyledForm autoComplete="off" onSubmit={submit}>
      <Label htmlFor={id}>Write country {selected}:</Label>
      <Input
        onClick={click}
        type="text"
        onKeyUp={type}
        error={input ? null : 'error'}
        placeholder={placeholder}
        id={id}
      />
      <List list={list} />
      <Select select={select} selected={selected} />
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
