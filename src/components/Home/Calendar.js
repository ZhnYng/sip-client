import axios from "axios";
import React from "react";

export default function Calendar(){
  const [days, setDays] = React.useState(':/');
  
  React.useEffect(() => {
    axios.get('/home/daysFromLastDrank', {params:{userId: localStorage.getItem('userId')}})
    .then(res => {
      setDays(res.data[0].days);
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