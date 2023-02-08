import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleShow = () => setShow((s) => !s);
  return (
    <div style={{width:'20%'}}>
     <Button variant="primary" onClick={toggleShow} className="me-2">
     Enable backdrop (default)
      </Button>
      <Offcanvas show={!show} onHide={handleClose} scroll={true} backdrop={false} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SideBar;