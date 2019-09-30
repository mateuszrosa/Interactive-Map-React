import React from "react";
import Heading from "components/Heading/Heading";
import Link from "components/Footer/Link/Link";
import styles from "components/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Heading
        size="h3"
        text="based on "
        comp={<Link href="https://restcountries.eu" text="REST COUNTRIES" />}
      ></Heading>
    </footer>
  );
};

export default Footer;
