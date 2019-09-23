import React from "react";
import "./Link.module.scss";

const Link = ({ text, href, comp }) => {
  return <a href={href}>{text}</a>;
};

export default Link;
