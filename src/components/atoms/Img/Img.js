import styled from 'styled-components';

const StyledImg = styled.img`
  width: 40%;
  display: block;
  margin: 10px auto;
  box-shadow: 0 0 3px 3px gray;
  @media (min-width: 768px) {
    width: 20%;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export default StyledImg;
