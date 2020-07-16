import React from 'react';
import styled from 'styled-components';
import List from 'components/molecules/List/List';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Select from 'components/atoms/Select/Select';
import PropTypes from 'prop-types';
import AppContext from '../../../context';

const StyledForm = styled.form`
  border-radius: 5px;
  width: 70%;
  height: auto;
  padding: 3px;
  margin: 7.5px auto;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  background-color: #ede8e7;

  @media (min-width: 425px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    padding: 6px;
    width: 75%;
    height: auto;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 80px;
    background-color: transparent;
  }

  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const Form = () => {
  return (
    <AppContext.Consumer>
      {({
        inputClick,
        submit,
        option,
        id,
        placeholderText,
        list,
        select,
        selected,
        type,
        input,
      }) => {
        return (
          <StyledForm autoComplete="off" onSubmit={submit}>
            <Label htmlFor={id}>Write country {selected}:</Label>
            <Input
              onClick={inputClick}
              type="text"
              onKeyUp={type}
              error={input ? null : 'error'}
              placeholder={placeholderText}
              id={id}
            />
            <List list={list} option={option} />
            <Select select={select} selected={selected} />
            <Input type="submit" submit value="Search" />
          </StyledForm>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Form;
