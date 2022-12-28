import React from "react";
import Nav from '../components/Home/HomeNav';
import ProgressBar from 'react-bootstrap/ProgressBar';
import fpLogo from '../img/FairPrice.png';
import sevenElevenLogo from '../img/7-11.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Rewards(){
  const [points, setPoints] = React.useState(3000)
  const [lastDrank, setLastDrank] = React.useState(5)

  return (
      <div>
        <Nav/>
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
            <ProgressBar variant="success" now={(points/5000)*100} label={points} animated/>
            <div className="row text-white fw-bold justify-content-between">
              <p className="col-1">0</p>
              <p className="col-2">5000</p>
            </div>
            <div className="row">
              <p className="col-10">Last Drank {lastDrank} days ago</p>
              <p className="col-2">+50</p>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={fpLogo} className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$5 FairPrice voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" className="btn btn-success col-6">1000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={sevenElevenLogo} className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$10 7-eleven voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" className="btn btn-success col-6">2000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={fpLogo} className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$5 FairPrice voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" className="btn btn-success col-6">1000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={fpLogo} className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$5 FairPrice voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" className="btn btn-success col-6">1000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 shadow rounded py-3 my-3 d-flex justify-content-center" >
            <div className="row align-items-center col-12 container-fluid">
              <img src={fpLogo} className="rounded col-3 p-0"/>
              <div className="col-9 d-flex flex-column">
                <p className="col-12 fs-5">$10 FairPrice voucher</p>
                <div className="row justify-content-end align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#408140" className="col-2 p-0 bi bi-gift" viewBox="0 0 16 16">
                    <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
                  </svg>
                  <button type="button" className="btn btn-success col-6">2000 points</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded p-3 pb-0 col-11" style={{backgroundColor: "#3e9c35"}}>
            <h2 className="display-3 px-5 text-center text-white">Vouchers</h2>
            <hr/>
            <div className="row justify-content-around my-4">
              <Card className="col-5">
                <Card.Img variant="top" src={fpLogo}/>
                <Card.Body className="px-0 pt-0">
                  <Card.Title className="col-12 text-center">$5 voucher</Card.Title>
                  <Button variant="success" className="col-12">Apply</Button>
                </Card.Body>
              </Card>
              <Card className="col-5">
                <Card.Img variant="top" src={sevenElevenLogo}/>
                <Card.Body className="px-0 pt-0">
                  <Card.Title className="col-12 text-center">$5 voucher</Card.Title>
                  <Button variant="success" className="col-12">Apply</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
  )
}