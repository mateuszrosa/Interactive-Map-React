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

const List = ({ list, option }) => {
  const { display, top, left, names, currencies } = list;
  return (
    <StyledList show={display} top={top} left={left}>
      {currencies
        ? currencies.map(curr => (
            <ListItem onClick={option} key={curr.alpha2Code}>
              {curr.name}
            </ListItem>
          ))
        : null}
      {names
        ? names.map(name => (
            <ListItem onClick={option} key={name}>
              {name}
            </ListItem>
          ))
        : null}
    </StyledList>
  );
};

export default List;
