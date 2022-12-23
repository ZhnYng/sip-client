import React from "react";
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
    axios.put('/home/updateGoal', {goal:goal}, {userId: localStorage.getItem('userId')})
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
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
    </>
  )
}