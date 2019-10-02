import React from "react";
import Paragraph from "components/Paragraph/Paragraph";
import Link from "components/Footer/Link/Link";
import styles from "components/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Paragraph
        size="h4"
        comp={<Link href="https://restcountries.eu" text="REST COUNTRIES" />}
        className1="footer"
      >
        based on<span> </span>
      </Paragraph>
    </footer>
  );
};

export default Footer;
