import React from "react";

export default function Calendar(props){

  const [days, setDays] = React.useState(":/")

  React.useEffect(() => {
    const userInfo = props.userInfo
    for(var i = 1; i < userInfo.length; i++){
      var wroteLatest = userInfo[userInfo.length-i];
      if(wroteLatest.drankToday){
        const diffTime = Math.abs(new Date() - new Date(wroteLatest.date));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        setDays(diffDays);
        break;
      }
    }
  }, [props.userInfo])

  return (
    <div className="shadow p-4 text-center rounded">
      <h1 className="display-5">
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