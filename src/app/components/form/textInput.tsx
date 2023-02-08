import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import Button from 'react-bootstrap/Button';
export interface TextInputProps {
  type: "text" | "password" | undefined;
  name: string;
  register: UseFormRegister<FieldValues> | any;
  errorMessage?: string | undefined | any;
  label: string;
}

const TextInput = ({ type, name, register, errorMessage, label }: TextInputProps) => {
  return (
    <div className="container">
      <input type={type} {...register(name)} />
    
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
