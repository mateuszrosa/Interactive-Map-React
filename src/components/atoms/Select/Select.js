import React from 'react';
import styled from 'styled-components';

const Select = ({ select }) => {
  return (
    <select onChange={select}>
      <option value="name">name</option>
      <option value="capital">capital</option>
      <option value="currency">currency</option>
    </select>
  );
};

export default Select;
