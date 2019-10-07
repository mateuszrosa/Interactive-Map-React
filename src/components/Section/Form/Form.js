import React from "react";
import Input from "components/Section/Form/Input/Input";
import Label from "components/Section/Form/Label/Label";
import styled from "styled-components";

const StyledForm = styled.form`
  text-align: center;
`;

const Form = ({ click, submit, input, id, placeholder }) => {
  return (
    <StyledForm autoComplete="off" onSubmit={submit}>
      <Label id={id} text="Write country name" />
      <Input
        click={click}
        type="text"
        input={input}
        placeholder={placeholder}
        id={id}
      />
      <Input type="submit" text="Search" />
    </StyledForm>
  );
};

export default Form;
