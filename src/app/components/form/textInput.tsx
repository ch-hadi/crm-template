import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

export interface TextInputProps {
  type: "text" | "password" | undefined;
  name: string;
  register: UseFormRegister<FieldValues> | any;
  errorMessage?: string | undefined | any;
  label: string;
}

const TextInput = ({ type, name, register, errorMessage, label }: TextInputProps) => {
  return (
    <>
      <label>{label}</label>
      <br></br>
      <input type={type} {...register(name)} />
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
};

export default TextInput;
