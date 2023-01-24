import React from "react";
import Chart from 'chart.js/auto';
import axios from "axios";

export default function Statistics(){

  React.useEffect(() => {
    // axios.get('/home/drinks', {params:{userId: localStorage.getItem('userId')}})
    //   .then(res => {
        let numOfDrinks = [3, 4, 2, 6, 3];
        let monthNames = ["Dec", "Jan", "Feb", "Mar", "Apr"];
        new Chart("myChart", {
          type: 'bar',
          data: {
            datasets: [{
              label: "Cups of bubble tea", 
              pointRadius: 6,
              backgroundColor: '#eb9347',
              data: numOfDrinks
            }],
            labels: monthNames,
          },
          options: {
            plugins: {
              legend: {
                display: true,
              }
            },
            scales: {
              y: {
                ticks: {
                  stepSize: 1
                }
              }
            }
          }
        });
      // .catch(err => {
      //   console.log(err);
      // })
  }, [])

  return (
    <div className="col-12 shadow rounded px-4 py-4 my-3">
      <canvas id="myChart" style={{width: '100%', minWidth:'50px'}}></canvas>
    </div>
  )
}