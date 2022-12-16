import React from "react";
import Nav from "../components/Home/HomeNav";
import Goal from "../components/Home/Goal";
import Header from "../components/Home/Header";
import Statistics from "../components/Home/Statistics";
import Calendar from "../components/Home/Calendar";
import Update from "../components/Home/Update";
import axios from "axios";

export default function Home(){

  const [username, setUsername] = React.useState("NA");
  const [userId, setUserId] = React.useState()

  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("userId");
    if (loggedInUser) {
      setUserId(loggedInUser);
      axios.get('/home/username', { params: { userId: loggedInUser } })
        .then(res => {
          setUsername(res.data[0].username);
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
      <Header user={username}/>
    </div>
    <div className="container-fluid row justify-content-center m-0 align-items-center my-3">
      <div className="col-12 col-lg-5 d-flex flex-column align-items-center">
        {/* {userInfo && <Goal userId={userId}/>} */}
        {/* {userInfo && <Statistics user={userId} userInfo={userInfo.drinksToday} update={update}/>} */}
      </div>
      {/* <div className="col-12 col-lg-3 my-3">
        {userInfo && <Calendar user={userId} userInfo={userInfo.drinksToday}/>}
      </div>
      <div className="col-12 col-lg-3 my-3">
        <Update user={userId} update={setUpdate}/>
      </div> */}
    </div>
    </>
  )
}