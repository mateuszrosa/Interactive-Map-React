import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  width: ${({ submit }) => (submit ? '60px' : '150px')};
  margin-left: ${({ submit }) => (submit ? '5px' : 'calc(50% - 75px - 30px)')};
  ::placeholder {
    color: ${props => (props.error ? 'red' : 'black')};
  }
  @media (min-width: 425px) {
    margin-left: ${({ submit }) => (submit ? '5px' : 'auto')};
  }
`;

export default Input;
