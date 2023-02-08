import React, { useState } from "react";
import TextInput from "../../components/form/textInput";
import { useForm } from "react-hook-form";
import * as authActions from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormExample from "../../components/form/FormExample";
// import { Button } from "react-bootstrap";
import Img from "./../../assets/img/login_background.jpeg"
export interface Obj {
  email:string,
  password:string
}
const validationSchema = Yup.object({
  password: Yup.string().required(),
  email: Yup.string().email().required(),
  // e:Yup.object()
});
const LoginPage = () => {
  const [Error , setError] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "admin@demo.com", password: "demo"},
    resolver: yupResolver(validationSchema),
  });
  const dispatch: AppDispatch = useDispatch();

  const onSubmit =(e:Obj)=>{
      
      handleSubmit((data) => {
       if(e.email === data.email && e.password === data.password){
        setError(false)
        dispatch(authActions.logIn(data.email, data.password));
       }
       setError(true)
    })()
  };
//  console.log(Error)
  return (
    // <div className="container-fluid">
    //   <div className="container text-center">
    //     <div className="row">
    //       <div className="col">Column</div>
    //       <div className="col">
    //         <form onSubmit={onSubmit}>
    //           <TextInput
    //             type={"text"}
    //             register={register}
    //             name="email"
    //             label="Email"
    //             errorMessage={errors["email"]?.message}
    //           />
    //           <br></br>
    //           <TextInput
    //             type={"password"}
    //             register={register}
    //             name="password"
    //             label="Password"
    //             errorMessage={errors["password"]?.message}
    //           />
    //           <Button type="submit">Login</Button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
   <div style={{display:'flex'}}>
    <div style={{width:'40%'}} className="position-relative">
      <img src={Img} alt='login' style={{width:'100%',height:'100vh'}}/>
     <h4 className="position-absolute top-50 text-white">Assignment</h4>
    </div>
    <div style={{width:'60%', justifyContent:'center',display:'flex', alignItems:'center'}}>
    <FormExample onSubmit={(e:Obj)=>onSubmit(e)} errorState={Error} />
    </div>
   </div>
  );
};
export default LoginPage;
