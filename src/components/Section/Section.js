import React from "react";
import Heading from "../Heading/Heading";
import Form from "./Form/Form";
import Info from "./Info/Info";
import "./Section.module.scss";

const Section = ({ click, submit, info, input, id, placeholder }) => {
  return (
    <section>
      <Heading type="section" text="Find information about that country" />
      <Form
        click={click}
        submit={submit}
        info={info}
        input={input}
        placeholder={placeholder}
        id={id}
      />
      <Info info={info} />
    </section>
  );
};

export default Section;
