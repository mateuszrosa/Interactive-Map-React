import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  width: ${({ submit }) => (submit ? '60px' : '110px')};
  margin-left: ${({ submit }) => (submit ? '5px' : '0')};
  ::placeholder {
    color: ${({ error }) => (error ? 'red' : 'black')};
  }
  @media (min-width: 1440px) {
    width: ${({ submit }) => (submit ? '60px' : '160px')};
  }
`;

export default Input;
