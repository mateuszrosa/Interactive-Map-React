import React from "react";
// import styles from "components/Heading/Heading.module.scss";
import styled from "styled-components";

let StyledHeading = styled.h1`
  margin: 0 auto 0 auto;
  text-align: center;
  font-size: ${props => (props.size === "title" ? "60px" : "24px")};
`;

const Heading = ({ children, size = "h1", comp, className }) => {
  return (
    <StyledHeading size={className}>
      {children}
      {comp}
    </StyledHeading>
  );
};

// const Heading = ({ children, size = "h1", comp, className1 }) => {
//   const Tag = size;
//   return (
//     <Tag>
//       {children}
//       {comp}
//     </Tag>
//   );
// };

export default Heading;
