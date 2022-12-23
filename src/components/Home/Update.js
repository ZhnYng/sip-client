import Button from 'react-bootstrap/Button'
import React from 'react';
import axios from "axios";
import './submitButton.css'

export default function Update(){

  const [updateSuccessful, setUpdateSuccessful] = React.useState(2);
    
  function handleSubmit(){
    axios.put('/home/addDrink', [], {params:{userId: localStorage.getItem('userId')}})
      .then(res => {
        if(Object.keys(res.data)[0] === "success msg"){
          setUpdateSuccessful(1)
          setTimeout(() => setUpdateSuccessful(2), 3000)
        }else{
          setUpdateSuccessful(0)
        }
        console.log(res.data)
      })
      .catch(err => {
        console.log(err); 
        setUpdateSuccessful(0);
        setTimeout(() => setUpdateSuccessful(2), 3000);
      })
  }

  return (
    <div className="shadow rounded p-5 text-center d-flex justify-content-around flex-column">
      <h1 className="display-3 text-center">Had a drink today?</h1>
      <div className="display-1">
        &#128064;
      </div>
      <div id={updateSuccessful == 1 ? "successAnimation" : updateSuccessful == 0 ? "failedAnimation" : "defaultAnimation"} className='row align-items-center'>
        <Button variant="success" className="text-center p-2 my-lg-5 my-2 fs-3" 
        onClick={handleSubmit} id="submitButton">
          {updateSuccessful == 1 ? 
              "Updated!" : updateSuccessful == 0 ?
                "Update failed" : 'Admit it'}
        </Button>
      </div>
    </div>
  )
}