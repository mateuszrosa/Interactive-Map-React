import React from "react";
import Heading from "components/Heading/Heading";
import Form from "components/Section/Form/Form";
import Info from "components/Section/Info/Info";
import "components/Section/Section.module.scss";

const Section = ({ click, submit, info, input, id, placeholder }) => {
  return (
    <section>
      <Heading size="h1" type="section">
        Find information about that country
      </Heading>
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
