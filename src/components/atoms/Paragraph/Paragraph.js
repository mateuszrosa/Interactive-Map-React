import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: ${props => (props.footer ? 400 : 800)};
  margin: 0 auto 0 auto;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

export default StyledParagraph;
