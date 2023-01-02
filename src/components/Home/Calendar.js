import axios from "axios";
import React from "react";

export default function Calendar(){
  const [days, setDays] = React.useState(0);
  
  React.useEffect(() => {
    axios.get('/home/daysFromLastDrank', {params:{userId: localStorage.getItem('userId')}})
    .then(res => {
      if(res.data[0].days){
        setDays(res.data[0].days);
        const numOfDays = res.data[0].days;
        axios.get('/rewards/points', {params: {userId: localStorage.getItem('userId')}})
          .then(res => {
            let points
            if(res.data) {
              points = res.data[0].points;
            }else{
              points = 0;
            }
            console.log(points)
            axios.post('/rewards/addPoints', {userId: localStorage.getItem('userId'), points: points+(numOfDays*10)})
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              })
          })
          .catch(err => {
            console.log(err);
          })
      }
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="shadow p-4 text-center rounded">
      <h1 className="display-3">
        Your last drink was only
        <div className="p-5 mx-5 my-4 display-1 fw-bold border 
        border-white border-3 rounded text-white" 
        style={{backgroundColor: '#eb9347'}}>
          {days}
        </div>
        day{days == 1 ? '' : 's'} ago
      </h1>
    </div>
  )
}