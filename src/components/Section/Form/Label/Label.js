import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  margin-right: 10px;
`;

const Label = ({ text, id }) => <StyledLabel htmlFor={id}>{text}</StyledLabel>;

Label.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Label;
