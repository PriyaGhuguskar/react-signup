import { useState } from 'react'
import { Button, Row, Col, Form} from "react-bootstrap"
import './index.css'

const RegistrationForm = () => {
  const [userDetails, setUserDetails] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: ''
   
  })

  const [error, setError] = useState({
    fullname: false,
    email: false,
    password: false,
    confirmpassword: false
   
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, password, confirmpassword } = userDetails

    if (fullname.length >= 1) {
      setError((previousError) => ({
        ...previousError,
        fullname: false
      }))
    } else {
      setError((previousError) => ({
        ...previousError,
        fullname: true
      }))
    }


    if (email.length >= 1) {
      setError((previousError) => ({
        ...previousError,
        email: false
      }))
    } else {
      setError((previousError) => ({
        ...previousError,
        email: true
      }))
    }

    if (password.length >= 1) {
      setError((previousError) => ({
        ...previousError,
        password: false
      }))
    } else {
      setError((previousError) => ({
        ...previousError,
        password: true
      }))
    }
    if (confirmpassword.length >= 1) {
      setError((previousError) => ({
        ...previousError,
        confirmpassword: false
      }))
    } else {
      setError((previousError) => ({
        ...previousError,
        confirmpassword: true
      }))
    }

  };

  return (
    <>
      <h1 className='sign-up-title'>Signup</h1>
  
      <Form onSubmit={handleSubmit} className="registration-form">
        <Row className="mb-3">
          <Form.Group as={Col} md="8" controlId="Full-name" className='form-div'>
            <input className='form-css'

              type="text"
              placeholder="Full Name"
              value={userDetails.fullname}
              onChange={(e) => setUserDetails({
                ...userDetails,
                fullname: e.target.value
              })}
            />

          </Form.Group>
          <Form.Group as={Col} md="8" controlId="Email" className='form-div'>
            <input className='form-css'

              type="text"
              placeholder="Email"
              value={userDetails.email}
              onChange={(e) => setUserDetails({
                ...userDetails,
                email: e.target.value
              })} />

          </Form.Group>
          <Form.Group as={Col} md="8" controlId="Password" className='form-div'>
            <input className='form-css'

              type="text"
              placeholder="Password"
              value={userDetails.password}
              onChange={(e) => setUserDetails({
                ...userDetails,
                password: e.target.value
              })}
            />

          </Form.Group>
          <Form.Group as={Col} md="8" controlId="Confirm-password" className='form-div'>

            <input className='form-css'
              type="text"
              placeholder="Confirm Password"
              value={userDetails.confirmPassword}
              onChange={(e) => setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value

              })}
            />

          </Form.Group>
          {((error.fullname) && (error.email) && (error.password) && (error.confirmPassword)) ? <Form.Control.Feedback type="invalid">
            Error : All the fields are mandatory
          </Form.Control.Feedback> : (<Form.Control.Feedback>successfully Signed Up</Form.Control.Feedback>)}


        </Row>


        <Button type="submit"  variant="light"onSubmit={handleSubmit}>Submit form</Button>
      </Form>
    </>
  );
};

export default RegistrationForm;
