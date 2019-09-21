import React from "react";
import Title from "../Title/Title";
import Form from "./Form/Form";
import "./Section.module.scss";

const Section = () => {
  return (
    <section>
      <Title type="section" text="Find information about that country" />
      <Form />
    </section>
  );
};

export default Section;
