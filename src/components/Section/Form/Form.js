import React from "react";
import Input from "./Input/Input";
import styles from "./Form.module.scss";

const Form = ({ click, change }) => {
  return (
    <form onSubmit={change}>
      <Input click={click} type="text" />
      <Input type="submit" />
    </form>
  );
};

export default Form;
