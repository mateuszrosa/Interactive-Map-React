import React from 'react';
import styled from 'styled-components';

const Select = ({ select, selected }) => {
  return (
    <select value={selected} onChange={select}>
      <option value="name">name</option>
      <option value="capital">capital</option>
    </select>
  );
};

export default Select;
