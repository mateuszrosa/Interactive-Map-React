import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 800;

  &:hover {
    color: #f00;
    text-decoration: underline;
    text-decoration-color: #f00;
  }
`;

export default StyledLink;
