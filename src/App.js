import './App.css'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './routes/Landing';
import Statistics from './routes/Statistics'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Submitted from './routes/Submitted';
import Home from './routes/Home';
import ChangeGoal from './routes/ChangeGoal';


export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="statistics" element={<Statistics/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="submitted" element={<Submitted/>}/>
          <Route path="changeGoal" element={<ChangeGoal/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}