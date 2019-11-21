import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  width: ${({ submit }) => (submit ? '70px' : '150px')};
  margin-left: ${({ submit }) => (submit ? '10px' : '0')};
  ::placeholder {
    color: ${props => (props.error ? 'red' : 'black')};
  }
`;

export default Input;
