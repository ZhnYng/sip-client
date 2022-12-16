import React from "react";

export default function Header(props){
  return (
    <div className="d-flex justify-content-center align-items-center mt-4 col-10 rounded shadow" 
    style={{
      height: '10vh', 
      backgroundColor: '#eb9347'
    }}>
      <p className="fs-1 mt-2 text-white">Welcome, {props.user}</p>
    </div>
  )
}
