import React from "react";
import FormLabel from "react-bootstrap/esm/FormLabel";
import Form from 'react-bootstrap/Form';
import Nav from "../components/Home/HomeNav";
import axios from "axios";
import LocationAlert from '../locations/LocationAlerts';

export default function Settings(){
  const [formData, setFormData] = React.useState({
    goal: 0,
    reminder: false
  });

  React.useEffect(() => {
    axios.get('/home/goal', {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            goal: res.data[0].goal
          }
        })
      })
      .catch(err => {
        console.log(err);
      })

    axios.get('/settings/getReminderStatus', {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        res.data[0].reminder === 1 ? document.getElementById("reminder").checked = true : document.getElementById("reminder").checked = false
        setFormData(prevFormData => {
          return ({
            ...prevFormData,
            reminder: res.data[0].reminder === 1 ? true : false
          })
        })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(){
    axios.put('/settings/updateGoal', {goal:formData.goal}, {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    axios.put('/settings/updateReminderStatus', {reminder: formData.reminder}, {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  return(
    <div className="container-fluid">
      <Nav/>
      <LocationAlert/>
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-4 text-center"><u>Settings</u></h1>
        <div className="col-12 container-fluid">
          <Form.Group controlId="goal" className="mx-3">
            <div className="row justify-content-center align-items-center mt-3">
              <FormLabel className="fs-5 p-0 col-7">Goal</FormLabel>
              <div className="d-flex p-0 col-5">
                <div className="col-4 me-2">
                  <Form.Control name="goal" type="number" step="1" 
                    onChange={handleChange} value={formData.goal}/>
                </div>
                <div className="fs-5 p-0 col-6">/month</div>
              </div>
            </div>
            <hr/>
            <div className="row justify-content-center align-items-center mt-3">
              <FormLabel className="fs-5 p-0 col-7">Reminder</FormLabel>
              <div className="flex-row-reverse d-flex p-0 col-5">
                <Form.Check
                  id="reminder"
                  name="reminder"
                  type="switch"
                  onChange={handleChange}
                  value={formData.reminder}
                />
              </div>
            </div>
          </Form.Group>
        </div>
        <button type="button" className="m-4 btn btn-success col-10" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  )
}