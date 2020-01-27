import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: ${({ show }) => (show ? 'block' : 'none')};
  border: 1px solid black;
  width: 130px;
  position: absolute;
  top: ${({ top }) => top || '0'};
  left: ${({ left }) => left || '0'};
`;

const List = ({ ...list }) => {
  const { display, top, left } = list.list;
  return (
    <StyledList show={display} top={top} left={left}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </StyledList>
  );
};

export default List;
