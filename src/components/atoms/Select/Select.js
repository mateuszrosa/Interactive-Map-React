import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 60px;
  margin-left: 5px;
  border-radius: 5px;
  background-color: #fff;
`;

const Select = ({ select, selected }) => {
  return (
    <StyledSelect value={selected} onChange={select}>
      <option value="name">name</option>
      <option value="capital">capital</option>
    </StyledSelect>
  );
};

export default Select;
