import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 55px;
  margin-left: 5px;
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
