import React from 'react';
import ListItem from 'components/atoms/ListItem/ListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0;
  border: 1px solid black;
  width: 130px;
  position: absolute;
  top: ${({ top }) => top || '0'};
  left: ${({ left }) => left || '0'};
  list-style-type: none;
`;

const List = ({ ...list }) => {
  const { display, top, left } = list.list;
  return (
    <StyledList show={display} top={top} left={left}>
      <ListItem>1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
    </StyledList>
  );
};

export default List;
