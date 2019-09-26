import React from "react";
import Input from "./Input/Input";
import styles from "./Form.module.scss";

const Form = ({ click, submit, input, placeholder }) => {
  return (
    <form onSubmit={submit}>
      <Input
        click={click}
        type="text"
        input={input}
        placeholder={placeholder}
      />
      <Input type="submit" />
    </form>
  );
};

export default Form;
