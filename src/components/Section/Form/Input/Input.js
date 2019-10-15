import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  border-radius: 5px;
  margin-left: ${props => (props.submit ? '10px' : '0')};
  ::placeholder {
    color: ${props => (props.error ? 'red' : 'black')};
  }
`;

const Input = props => {
  const { type, text, click, input, id, placeholder } = props;
  if (input === undefined) {
    return <StyledInput submit type={type} value={text} />;
  }
  if (input === true) {
    return <StyledInput onClick={click} type={type} placeholder={placeholder} id={id} />;
  }
  return <StyledInput error onClick={click} type={type} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  click: PropTypes.func,
  input: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
