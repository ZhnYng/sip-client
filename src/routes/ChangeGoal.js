import React from "react";
import Nav from "../components/Home/HomeNav";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import FormLabel from "react-bootstrap/esm/FormLabel";

export default function ChangeGoal(props){
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

  function handleSubmit(event){
    if (event.key === "Enter") {
      axios.put('/home/updateGoal', {goal:goal}, {params:{userId: props.userId}})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <>
      <Nav/>
      <div className="col-12 p-5">
        <Form.Group className="my-3 text-center" controlId="goal">
          <FormLabel className="display-1">Change your goal below</FormLabel>
          <div className="row justify-content-center">
            <div className="col-6">
              <Form.Control name="goal" type="text" placeholder="No. of cups" 
              onChange={handleChange} onKeyDown={handleSubmit} value={goal}/>
            </div>
            <span className="fs-4 col-4">/ month</span>
          </div>
        </Form.Group>
      </div>
    </>
  )
}