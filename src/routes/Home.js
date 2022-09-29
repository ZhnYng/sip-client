import React from "react";
import Nav from "../components/Nav";
import Goal from "../components/Home/Goal";
import Header from "../components/Home/Header";
import Statistics from "../components/Home/Statistics";
import Calendar from "../components/Home/Calendar";
import Update from "../components/Home/Update";
import axios from "axios";

export default function Home(){

  const [user, setUser] = React.useState("");
  const [userInfo, setUserInfo] = React.useState();

  // Function to handle user info
  function handleUserInfo(userData){
    let goals = [], drinksToday = [];
    for(const data of userData){
      goals = [...goals, {goal: data.goal, date: data.date}];
      drinksToday = [...drinksToday, {drankToday: data.drank_today, date: data.date}];
    }
    return {goals: goals, drinksToday: drinksToday};
  }

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(() => {return loggedInUser})
      axios.post('/home', {user: loggedInUser})
        .then(res => {
          setUserInfo(handleUserInfo(res.data))
        })
        .catch(err => {
          console.log(err);
        })
    }else{
      window.location.href = '/login';
    }
  }, [])

  return(
    <>
    <Nav/>
    <div className="d-flex justify-content-center">
      <Header user={user}/>
    </div>
    <div className="container-fluid row justify-content-center my-5">
      <div className="col-5 d-flex flex-column align-items-center">
        {userInfo && <Goal user={user} userInfo={userInfo.goals}/>}
        {userInfo && <Statistics user={user} userInfo={userInfo.drinksToday}/>}
      </div>
      <div className="col-3">
        {userInfo && <Calendar user={user} userInfo={userInfo.drinksToday}/>}
      </div>
      <div className="col-3">
        <Update user={user}/>
      </div>
    </div>
    </>
  )
}