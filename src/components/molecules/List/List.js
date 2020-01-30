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
  const { display, top, left, options } = list;
  return (
    <StyledList show={display} top={top} left={left}>
      {options
        ? options.map(item => (
            <ListItem onClick={option} key={item}>
              {item}
            </ListItem>
          ))
        : null}
    </StyledList>
  );
};

export default List;
