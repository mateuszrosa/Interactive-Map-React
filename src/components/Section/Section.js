import React from "react";
import Heading from "../Heading/Heading";
import Form from "./Form/Form";
import Info from "./Info/Info";
import "./Section.module.scss";

const Section = () => {
  return (
    <section>
      <Heading type="section" text="Find information about that country" />
      <Form />
      <Info />
    </section>
  );
};

export default Section;
