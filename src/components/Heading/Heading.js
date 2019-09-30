import React from "react";
import styles from "components/Heading/Heading.module.scss";

// const Heading = ({ children, size = "h1", type, comp }) => {
//   if (size === "h1") {
//     return (
//       <h1 className={type === "title" ? styles.title : styles.section}>
//         {children}
//         {comp}
//       </h1>
//     );
//   } else {
//     return (
//       <h3 className={type === "title" ? styles.title : styles.section}>
//         {children}
//         {comp}
//       </h3>
//     );
//   }
// };

const Heading = ({ children, size = "h1", type, comp }) => (
  <>
    {size === "h1" ? (
      <h1 className={type === "title" ? styles.title : styles.section}>
        {children}
        {comp}
      </h1>
    ) : (
      <h3 className={type === "title" ? styles.title : styles.section}>
        {children}
        {comp}
      </h3>
    )}
  </>
);

export default Heading;
