import React from "react";
import Heading from "../Heading/Heading";
import Link from "./Link/Link";
import styles from "./Footer.module.scss";

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
