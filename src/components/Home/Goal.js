import axios from "axios";
import React from "react";
import Form from 'react-bootstrap/Form';

export default function Goal(){

  const [goal, setGoal] = React.useState('');

  React.useEffect(() => {
    axios.get('/home/goal', {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        setGoal(res.data[0].goal);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  
  return(
    <div className="col-12 shadow rounded py-3">
      <h1 className="fs-1 text-center">Current goal</h1>
      <div className="col-12 display-5 text-center">
        {goal} / month
      </div>
    </div>
  )
}