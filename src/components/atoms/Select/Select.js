import React from 'react';
import styled from 'styled-components';

const Select = ({ select }) => {
  return (
    <select onChange={select}>
      <option value="siema">siema</option>
      <option value="siema1">siema1</option>
      <option value="siema2">siema2</option>
    </select>
  );
};

export default Select;
