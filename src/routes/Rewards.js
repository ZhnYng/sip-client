import React from "react";
import Nav from '../components/Home/HomeNav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import fpLogo from '../img/FairPrice.png';
import sevenElevenLogo from '../img/7-11.png';
import Button from 'react-bootstrap/Button';
import LocationAlert from "../locations/LocationAlerts";
import Card from 'react-bootstrap/Card';
import axios from "axios";


export default function Rewards(){
  const [points, setPoints] = React.useState(0)
  const [vouchers, setVouchers] = React.useState("Your vouchers will appear here")

  React.useEffect(() => {
    axios.get('/rewards/points', {params: {userId: localStorage.getItem('userId')}})
      .then(res => {
        if(res.data) setPoints(res.data[0].points);
      })
      .catch(err => {
        console.log(err);
      })

    axios.get('/rewards/vouchers', {params: {userId: localStorage.getItem('userId')}})
      .then(res => {
        if(res.data){
          setVouchers(res.data)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function buyVoucher(id, cost){
    axios.post('/rewards/addVoucher', {points: parseInt(points)-cost, voucherId: id, userId: localStorage.getItem('userId')})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response.data);
      })
  }

  return (
      <div>
        <Nav/>
        <div className="container-fluid">
          <LocationAlert/>
        </div>
        <div className="d-flex flex-column align-items-center mb-5 container-fluid">
          <div 
            className="d-flex flex-column col-11 rounded shadow p-4" 
            style={{
              backgroundColor: '#eb9347'
            }}
          >
            <p className="display-3 mt-2 text-white text-center">🎉 Points 💰</p>
            <hr/>
            <h3 className="text-center fw-bolder text-white">Current Points</h3>
            <p className="display-1 fw-bold text-center text-white">{points}</p>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={fpLogo} alt="Fairprice logo" className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$5 FairPrice voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" onClick={() => buyVoucher(1, 1000)} className="btn btn-success col-6">1000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={fpLogo} alt="7-11 logo" className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$10 FairPrice voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" onClick={() => buyVoucher(2, 2000)} className="btn btn-success col-6">2000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={sevenElevenLogo} alt="Fairprice logo" className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$5 7-11 voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" onClick={() => buyVoucher(3, 1000)} className="btn btn-success col-6">1000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={sevenElevenLogo} alt="Fairprice logo" className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$10 7-11 voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" onClick={() => buyVoucher(4, 2000)} className="btn btn-success col-6">2000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded p-3 pb-0 col-11" style={{backgroundColor: "#3e9c35"}}>
            <h2 className="display-3 px-5 text-center text-white">Vouchers</h2>
            <hr/>
            {typeof(vouchers) !== "object" && <p className="display-5 text-center text-white">{vouchers}</p>}
            <div className="row justify-content-around my-4">
              {typeof(vouchers) === "object" && vouchers.map(x => {
                return (
                  <Card className="col-5 my-2">
                    <Card.Img variant="top" src={x.brand === "FairPrice" ? fpLogo : sevenElevenLogo}/>
                    <Card.Body className="px-0 pt-0">
                      <Card.Title className="col-12 text-center">${x.amount} voucher</Card.Title>
                      <Button variant="success" className="col-12">Apply</Button>
                    </Card.Body>
                  </Card>
                )})}
            </div>
          </div>
        </div>
      </div>
  )
}