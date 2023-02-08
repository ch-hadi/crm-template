import Form from "react-bootstrap/Form";

const Input = ({text,placeholder,boldHeading}) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder={`${placeholder}`} />
        <p style={{fontSize:12 , margin:4}}><span className='filter-para'>{boldHeading}</span> {text}</p>   
      </Form.Group>
    </div>
  );
};

export default Input;
