import styled from 'styled-components';

const Input = styled.input`
  border-radius: 5px;
  width: ${({ submit }) => (submit ? '60px' : '185px')};
  margin-left: ${({ submit }) => (submit ? '5px' : '0')};
  background-color: #fff;
  ::placeholder {
    color: ${({ error }) => (error ? 'red' : 'black')};
  }

  @media (min-width: 768px) {
    width: ${({ submit }) => (submit ? '60px' : '200px')};
  }

  @media (min-width: 1440px) {
    width: ${({ submit }) => (submit ? '60px' : '160px')};
  }
`;

export default Input;
