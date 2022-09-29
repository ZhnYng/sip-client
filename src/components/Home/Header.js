import React from "react";

export default function Header(props){
  return (
    <div className="d-flex justify-content-evenly align-items-center mt-3 col-6 rounded shadow" 
    style={{
      height: '13vh', 
      backgroundColor: '#eb9347', 
      maxWidth: '60vw'
    }}>
      <p className="fs-1 text-white mt-2">Welcome, {props.user}</p>
    </div>
  )
}
