import React from "react";
import Input from "./Input/Input";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form>
      <Input type="text" />
      <Input type="submit" />
    </form>
  );
};

export default Form;
