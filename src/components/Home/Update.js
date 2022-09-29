import Button from 'react-bootstrap/Button'
import React from 'react';
import axios from "axios";
import './submitButton.css'

export default function Update(props){

  const [updateSuccessful, setUpdateSuccessful] = React.useState(2);
    
  function handleSubmit(){
    axios.post('/home/update', {drankToday: true, user: props.user})
      .then(res => {
        if(res.data === "Successful"){
          setUpdateSuccessful(1)
          setTimeout(() => setUpdateSuccessful(2), 2000)
        }else{
          setUpdateSuccessful(0)
        }
      })
      .catch(err => {
        console.log(err); 
        setUpdateSuccessful(0);
        setTimeout(() => setUpdateSuccessful(2), 2000);
      })
  }

  return (
    <div className="shadow rounded p-5 text-center d-flex justify-content-around flex-column">
      <h1 className="display-5 text-center">Had a drink today?</h1>
      <div className="display-1">
        &#128064;
      </div>
      <div id={updateSuccessful == 1 ? "successAnimation" : updateSuccessful == 0 ? "failedAnimation" : "defaultAnimation"} className='row align-items-center'>
        <Button variant="success" className="text-center p-2 my-5 fs-3" 
        onClick={handleSubmit} id="submitButton">Admit it</Button>
        <svg id='submitButtonTick' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#198754" className="bi bi-check-circle-fill col-4" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <svg id='submitButtonCross' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-circle-fill col-4" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
        </svg>
      </div>
    </div>
  )
}