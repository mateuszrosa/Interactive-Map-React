import React from "react";
import Heading from "../Heading/Heading";
import Link from "./Link/Link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Heading size="h3" text={<Link text="Link1" />} />
    </footer>
  );
};

export default Footer;
