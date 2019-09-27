import React from "react";
import Input from "./Input/Input";
import Label from "./Label/Label";
import "./Form.module.scss";

const Form = ({ click, submit, input, id, placeholder }) => {
  return (
    <form onSubmit={submit}>
      <Label id={id} text="Write country name" />
      <Input
        click={click}
        type="text"
        input={input}
        placeholder={placeholder}
      />
      <Input type="submit" text="Search" />
    </form>
  );
};

export default Form;
