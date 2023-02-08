import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Input from '../Input/Input';
import { Button } from 'react-bootstrap';

function CModal() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Button onClick={()=>setLgShow(true)} >New Customer</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={()=>setLgShow(!lgShow)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        {/* <Container> */}
         <div>
         <Row>
            <Col xs={6} md={4}>
            <label>Enter First Name</label>
            <Input placeholder={'Name'} text={''} />
            </Col>
            <Col xs={6} md={4}>
            <label>Enter First Name</label>
            <Input placeholder={'Name'} text={''} />
            </Col>
            <Col xs={6} md={4}>
            <label>Enter First Name</label>
            <Input placeholder={'Name'} text={''} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
            <label>Enter First Name</label>
            <Input placeholder={'Name'} text={''} />
            </Col>
            <Col xs={6} md={4}>
            <label>Enter First Name</label>
            <Input placeholder={'Name'} text={''} />
            </Col>
            <Col xs={6} md={4}>
            <label>Enter First Name</label>
            <Input placeholder={'Name'} text={''} />
            </Col>
          </Row>
         </div>
        {/* </Container> */}
        <Button >Close</Button>
      </Modal>
    </>
  );
}

export default CModal;