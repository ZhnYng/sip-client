import React from "react";
import NavigationBar from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export default function Signup() {
  const TEST_VALUE = "";
  const [formData, setFormData] = React.useState({
    username: TEST_VALUE,
    password: TEST_VALUE,
    confirmPassword: TEST_VALUE
  });

  function handleChange(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.post('/signup/submit', {"username" : formData.username, "password" : formData.confirmPassword})
      .then(res => {
        if(res.data === "Successful"){
          window.location.href = '/submitted';
        }else{
          let validation = res.data;
          validator(validation)
        }
      })
      .catch(err => console.log(err))
  }

  function validator(validation){
    let usernameContents = document.getElementById('username-contents');
    let passwordDifferent = document.getElementById('password-different');
    let passwordMaxLength = document.getElementById('password-max-length');
    let usernameUsed = document.getElementById('username-used');

    validation.nameDoesntExists ? usernameUsed.style.display = "none" : usernameUsed.style.display = "block";
    validation.nameValid ? usernameContents.style.display = "none" : usernameContents.style.display = "block";
    validation.passwordMatches ? passwordDifferent.style.display = "none" : passwordDifferent.style.display = "block";
    validation.passwordValid ? passwordMaxLength.style.display = "none" : passwordMaxLength.style.display = "block";
  }

  return (
    <>
    <NavigationBar/>
    <div className="d-flex justify-content-center mt-5">
      <Form className="col-xl-4 col-lg-5 col-10 col-md-6 p-4" id="signUpForm"
      style={{backgroundColor: '#eb9347', borderRadius: '25px'}}>
        <h1 className="text-center display-1 fw-bold">Sign Up</h1>
        <Form.Group className="my-3" controlId="formBasicUsername">
          <Form.Label className="fs-5">Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Username" 
          value={formData.username} onChange={handleChange}/>
          <p style={{display: 'none', color: 'red', fontWeight: 'bold'}} id="username-contents">Contains less than 30 alphanumeric characters, underscores(-) and periods(.)</p>
          <p style={{display: 'none', color: 'red', fontWeight: 'bold'}} id='username-used'>Username has been used</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-5">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" 
          value={formData.password} onChange={handleChange}/>
          <p style={{display: 'none', color: 'red', fontWeight: 'bold'}} id="password-max-length">Password cannot be more than 100 characters</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="fs-5">Confirm password</Form.Label>
          <Form.Control name="confirmPassword" type="password" placeholder="Confirm password" 
          value={formData.confirmPassword} onChange={handleChange}/>
          <p style={{display: 'none', color: 'red', fontWeight: 'bold'}} id="password-different">Password is different from Confirm Password</p>
        </Form.Group>
        <Button variant="primary" id="button" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
}