import axios from "axios";
import React from "react";
import Form from 'react-bootstrap/Form';

export default function Goal(props){

  const [goal, setGoal] = React.useState('');
  const [currentGoal, setCurrentGoal] = React.useState(null);

  React.useEffect(() => {
    const userId = props.userId;
    axios.get('/home/goal', {params:{userId: userId}})
      .then(res => {
        setUsername(res.data[0].goal);
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
      axios.post('/home/updateGoal', {goal: goal, user: props.user})
      .then(res => {
        if(res.data === "Successful"){
          console.log("works")
          window.history.go(0);
        }else{
          console.log("Update failed");
        }
      })
      .catch(err => console.log(err))
    }
  }

  function goalsetter(currentGoal){
    const html = currentGoal ?
    <h3 className="display-5 text-center">{currentGoal} / month</h3>
    :
    <div className="row justify-content-center">
      <div className="col-6">
        <Form.Control name="goal" type="text" placeholder="No. of cups" 
        onChange={handleChange} onKeyDown={handleSubmit} value={goal}/>
      </div>
      <span className="fs-4 col-4">/ month</span>
    </div>
    return html;
  }
  
  return(
    <div className="col-12 shadow rounded py-3">
      <Form.Group className="my-3 text-center" controlId="goal">
        <Form.Label onClick={() => {if(currentGoal) return setCurrentGoal(null); else window.history.go(0);}} 
        className="fs-3 text-center">Want to set or change your goal?</Form.Label>
        {goalsetter(currentGoal)}
      </Form.Group>
    </div>
  )
}