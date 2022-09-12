import './App.css'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Statistics from './routes/Statistics'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Submitted from './routes/Submitted';

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="submitted" element={<Submitted/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}