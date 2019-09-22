import React from "react";
import Heading from "../Heading/Heading";
import Form from "./Form/Form";
import "./Section.module.scss";

const Section = () => {
  return (
    <section>
      <Heading type="section" text="Find information about that country" />
      <Form />
    </section>
  );
};

export default Section;
