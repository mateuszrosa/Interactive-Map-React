import React from 'react';
import ListItem from 'components/atoms/ListItem/ListItem';
import styled from 'styled-components';
import AppContext from '../../../context';

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

const List = () => {
  return (
    <AppContext.Consumer>
      {({ displayList, top, left, names, option }) => {
        return (
          <StyledList show={displayList} top={top} left={left}>
            {names
              ? names.map(name => (
                  <ListItem onClick={option} key={name}>
                    {name}
                  </ListItem>
                ))
              : null}
          </StyledList>
        );
      }}
    </AppContext.Consumer>
  );
};

export default List;
