import React from "react";
import NavigationBar from "../components/Nav"

export default function Submitted(){
  return(
    <>
    <NavigationBar/>
    <div className="d-flex justify-content-center align-items-center container-fluid flex-column" style={{height: '80vh'}}>
      <h1 className="display-1">Thanks for signing up.</h1>
      <p className="fs-3">
        <a href="/login" style={{color: '#eb9347'}}>
          Login
        </a> to begin your journey with Sip.</p>
    </div>
    </>
  )
}