import React from "react";
import NavigationBar from "../components/Nav";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export default function Login() {
  const TEST_VALUE = ""
  const [formData, setFormData] = React.useState({
    username: TEST_VALUE,
    password: TEST_VALUE
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
    axios.post('/login/submit', formData)
      .then(res => {
        if(Object.keys(res.data) === "error msg"){
          console.log("Login failed");
        }else if(Object.values(res.data) === "password invalid"){
          console.log("password invalid");
        }else{
          localStorage.setItem('userId', res.data.userId)
          window.location.href = '/home';
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
    <NavigationBar/>
    <div className="d-flex mt-5 justify-content-center">
      <Form className="col-xl-4 col-lg-5 col-10 col-md-6 p-4"
      style={{backgroundColor: '#eb9347', borderRadius: '25px'}}>
        <h1 className="text-center fw-bold mb-0 display-1">Log in</h1>
        <Form.Group className="my-3" controlId="formBasicUsername">
          <Form.Label className="fs-3">Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Username" 
          value={formData.username} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-3">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" 
          value={formData.password} onChange={handleChange}/>
          <a href="/too-bad" className="text-decoration-none">
            <Form.Text className="text-dark">
              Forgot password?
            </Form.Text>
          </a>
        </Form.Group>
        <Button variant="primary" id="button" type="submit" onClick={handleSubmit}>
          Done
        </Button>
      </Form>
    </div>
    </>
  );
}