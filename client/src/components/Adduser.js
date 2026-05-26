import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import './adduser.css';
import { adduser } from '../redux/userslice';
import { useDispatch } from 'react-redux';

function Adduser({ping, setping}) {

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newuser, setnewuser] = useState({
        name:"",
        lastname:"",
        dateofbirth:"",
        email:"",
        img:""
    })

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='addbutton'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M285.7 368C384.2 368 464 447.8 464 546.3C464 562.7 450.7 576 434.3 576L77.7 576C61.3 576 48 562.7 48 546.3C48 447.8 127.8 368 226.3 368L285.7 368zM528 144C541.3 144 552 154.7 552 168L552 216L600 216C613.3 216 624 226.7 624 240C624 253.3 613.3 264 600 264L552 264L552 312C552 325.3 541.3 336 528 336C514.7 336 504 325.3 504 312L504 264L456 264C442.7 264 432 253.3 432 240C432 226.7 442.7 216 456 216L504 216L504 168C504 154.7 514.7 144 528 144zM256 312C189.7 312 136 258.3 136 192C136 125.7 189.7 72 256 72C322.3 72 376 125.7 376 192C376 258.3 322.3 312 256 312z"/></svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter user name" onChange={(e)=>setnewuser({...newuser, name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter user lastname" onChange={(e)=>setnewuser({...newuser, lastname:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of birthday</Form.Label>
        <Form.Control type="date" placeholder="Enter date of birthday" onChange={(e)=>setnewuser({...newuser, dateofbirth:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter user email" onChange={(e)=>setnewuser({...newuser, email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter user image" onChange={(e)=>setnewuser({...newuser, img:e.target.value})}/>
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(adduser(newuser)); alert("The new user is added"); setping(!ping)}}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Adduser