import React, { useState,useRef } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Obj } from "../../pages/auth/login";

interface Prop {
  onSubmit : (e:Obj)=>void,
  errorState:boolean
}

function FormExample(props:Prop) {
  const emailRef = useRef<any>()
  const passwordRef = useRef<any>()
  const [validated, setValidated] = useState(false);
 
  // const handleChange=(e:any)=>{
  //   console.log(e.target.value)
  // }
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(form.checkValidity()){
      // console.log(inputValue.current.value)
      event.preventDefault();
      event.stopPropagation();
      props.onSubmit({email:emailRef.current.value , password:passwordRef.current.value})
    }
    console.log(props.errorState)
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ width: "50%" }}
    >
      <div className="p">
        <Row className="mb-3 flex-column ">
          <div className="ok my-5 text-center">
            <h3 className="fw-bold">Login Account</h3>
            <p className="text-secondary" style={{ fontSize: 12 }}>
              Enter your username and password
            </p>
          </div>
          <div className="os">
            <p
              className="border border-0 rounded p-3"
              style={{ fontSize: 12, background: "#eee4ff", color: "#8d57fc" }}
            >
              Use account <span className="fw-bold">admin@demo.com</span> and
              passowrd <br></br>
              <span className="fw-bold">demo</span> to continue.
            </p>
          </div>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                className="border border-0 bg-light my-1 py-2"
                // onChange={handleChange}
                ref={emailRef}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <InputGroup hasValidation>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                defaultValue="Otto"
                className="border border-0 bg-light my-1 py-2"
                ref={passwordRef}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your password
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Button
          type="submit"
          style={{ background: "#3699fe", fontSize: 12, fontFamily: "Poppins" }}
          className='border-0'
        >
          Sign In
        </Button>
      </div>
    </Form>
  );
}

export default FormExample;
