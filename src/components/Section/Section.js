import React from "react";
import Title from "../Title/Title";
import Input from "./Input/Input";
import "./Section.module.scss";

const Section = () => {
  return (
    <section>
      <Title type="section" text="Find information about that country" />
      <Input />
    </section>
  );
};

export default Section;
