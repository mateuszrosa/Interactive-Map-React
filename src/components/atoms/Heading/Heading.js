import styled from 'styled-components';

const StyledHeading = styled.h1`
  margin: 0 auto 0 auto;
  text-align: center;
  font-size: ${props => (props.type === 'title' ? '30px' : '20px')};
  @media (min-width: 375px) {
    font-size: ${props => (props.type === 'title' ? '35px' : '20px')};
  }
  @media (min-width: 425px) {
    font-size: ${props => (props.type === 'title' ? '40px' : '20px')};
  }
  @media (min-width: 1024px) {
    font-size: ${props => (props.type === 'title' ? '55px' : '14px')};
  }
  @media (min-width: 1440px) {
    font-size: ${props => (props.type === 'title' ? '70px' : '24px')};
  }
`;

export default StyledHeading;
