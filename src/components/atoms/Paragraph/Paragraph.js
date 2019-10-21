import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: ${props => (props.footer ? 400 : 800)};
  margin: 0 auto 0 auto;
`;

export default StyledParagraph;
