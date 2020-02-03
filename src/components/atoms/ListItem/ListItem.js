import styled from 'styled-components';

const ListItem = styled.li`
  background-color: gray;
  border-bottom: 1px dotted #dedede;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default ListItem;
