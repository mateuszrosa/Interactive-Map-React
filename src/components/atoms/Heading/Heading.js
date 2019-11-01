import styled from 'styled-components';

const StyledHeading = styled.h1`
  margin: 0 auto 0 auto;
  text-align: center;
  font-size: ${props => (props.type === 'title' ? '40px' : '14px')};
  @media (min-width: 768px) {
    font-size: ${props => (props.type === 'title' ? '60px' : '24px')};
  }
  @media (min-width: 1024px) {
    font-size: ${props => (props.type === 'title' ? '50px' : '14px')};
  }
  @media (min-width: 1440px) {
    font-size: ${props => (props.type === 'title' ? '60px' : '24px')};
  }
`;

export default StyledHeading;
