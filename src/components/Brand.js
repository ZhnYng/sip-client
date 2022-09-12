import React from "react";
import logo from '../img/PinClipart.com_catering-clip-art_5398038.png';

export default function Brand(){
  return(
      <div className='d-flex align-items-center'>
        <img src={logo} alt="logo" width="50rem"/>
        <h1 className='display-5 ms-2'>Sip</h1>
      </div>
  )
}