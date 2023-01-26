import React from "react";
import TextInput from "../../components/form/textInput";
import { useForm } from "react-hook-form";
import * as authActions from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const validationSchema = Yup.object({
  password: Yup.string().required(),
  email: Yup.string().email().required(),
});
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "admin@demo.com", password: "demo" },
    resolver: yupResolver(validationSchema),
  });
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = handleSubmit((data) => {
    dispatch(authActions.logIn(data.email, data.password));
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextInput type={"text"} register={register} name="email" label="Email" errorMessage={errors["email"]?.message} />
        <br></br>
        <TextInput type={"password"} register={register} name="password" label="Password" errorMessage={errors["password"]?.message} />
        <button type="submit">login</button>
      </form>
    </div>
  );
};
export default LoginPage;
