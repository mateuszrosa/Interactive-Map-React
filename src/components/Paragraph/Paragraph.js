import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: ${props => (props.footer ? 400 : 800)};
  margin: 0 auto 0 auto;
`;

const Paragraph = ({ children, comp, footer }) => {
  return (
    <StyledParagraph footer={footer && footer}>
      {children} {comp}
    </StyledParagraph>
  );
};
Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  comp: PropTypes.element.isRequired,
};

export default Paragraph;
