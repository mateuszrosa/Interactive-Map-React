import React from 'react';
import ListItem from 'components/atoms/ListItem/ListItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  const { display, top, left, names } = list;
  return (
    <StyledList show={display} top={top} left={left}>
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

List.propTypes = {
  list: PropTypes.shape({ root: PropTypes.string }).isRequired,
  option: PropTypes.func.isRequired,
};

export default List;
