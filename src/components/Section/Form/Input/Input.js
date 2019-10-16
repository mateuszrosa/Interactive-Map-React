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

const Input = ({ type, text, click, input, id, placeholder }) => {
  return (
    <StyledInput
      type={type}
      submit={type === 'submit' ? type : null}
      value={type === 'submit' ? text : undefined}
      placeholder={type === 'text' ? placeholder : null}
      error={input ? null : 'error'}
      onClick={type === 'text' ? click : null}
      id={type === 'text' ? id : null}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  click: PropTypes.func,
  input: PropTypes.bool,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  text: '',
  click: null,
  input: null,
  id: null,
  placeholder: '',
};

export default Input;
