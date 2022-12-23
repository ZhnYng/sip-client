import React from "react";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Form from 'react-bootstrap/Form';
import Nav from "../components/Home/HomeNav";
import axios from "axios";

export default function Settings(){
  const [goal, setGoal] = React.useState(0);
  React.useEffect(() => {
    axios.get('/home/goal', {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        setGoal(res.data[0].goal);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function handleChange(event){
    setGoal(event.target.value)
  }

  function handleSubmit(){
    axios.put('/home/updateGoal', {goal:goal}, {params:{userId: localStorage.getItem('userId')}})
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  return(
    <div className="container-fluid">
      <Nav/>
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-4 text-center mb-4"><u>Settings</u></h1>
        <div className="col-12 container-fluid">
          <Form.Group controlId="goal">
            <div className="row justify-content-center">
              <FormLabel className="fs-5 p-0 col-7">Change your goal</FormLabel>
              <div className="row p-0 col-5">
                <div className="col-6">
                  <Form.Control name="goal" className="" type="number" step="1" placeholder="No. of cups" 
                    onChange={handleChange} value={goal}/>
                </div>
                <div className="fs-5 p-0 col-6">/ month</div>
              </div>
            </div>
          </Form.Group>
        </div>
        <button type="button" className="m-4 btn btn-success col-10" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}