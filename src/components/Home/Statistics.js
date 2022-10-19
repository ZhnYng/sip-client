import React from "react";
import Chart from 'chart.js/auto';

export default function Statistics(props){

  const [data, setData] = React.useState([3, 6, 3, 5, 4, 5]);
  const [labels, setLabels] = React.useState(['January', 'Febuary', 'March', 'April', 'May', 'June']);

  React.useEffect(() => {
    const userInfo = props.userInfo;
    // Sum up all the number of drinks consumed in each month
    var drinksEachMonth = {};
    for(var i = 1; i < userInfo.length; i++){
      let wroteLatest = userInfo[userInfo.length-i];
      if(wroteLatest.date != null){
        var date = new Date(wroteLatest.date);
        let monthIndex = date.getMonth();
        const listOfMonths = ["January","February","March","April","May","June",
        "July","August","September","October","November","December"];
        let month = listOfMonths[monthIndex]
        if(!drinksEachMonth[month]){
          drinksEachMonth[month] = 1;
        }else{
          drinksEachMonth[month]++;
        }
      }
    }
    setLabels(Object.keys(drinksEachMonth));
    setData(Object.values(drinksEachMonth));
  }, [props.userInfo])

  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      datasets: [{
        label: "Cups of bubble tea", 
        pointRadius: 6,
        backgroundColor: '#eb9347',
        data: data
      }],
      labels: labels,
    },
    options: {
      plugins: {
        legend: {
          display: true,
        }
      }
    }
  });
  console.log(props.update)

  // Remove first render of chart because it is using default values
  React.useEffect(() => {
    myChart.destroy();
    console.log(props.update)
  }, [props.update])

  return (
    <div className="col-11 shadow rounded px-5 py-4 mt-4">
      <canvas id="myChart" style={{width: '100%', minWidth:'50px'}}></canvas>
    </div>
  )
}