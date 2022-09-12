import React from "react";
import './components.css';

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default function Footer(){
    return(
        <div className="bg-dark container-fluid m-0 text-white row 
        align-items-center justify-content-center" style={{height:"23vh"}}>
            <h1 className="display-5 col-4">Sip</h1>
            <div className="col-5">
                <a href="mailto:sipFeedback@sipAdmin.com"
                className="text-decoration-none text-secondary fs-5">
                    Email us
                </a>
                <br/>
                <a href="tel:21343243"
                className="text-decoration-none text-secondary fs-5">
                    Call us
                </a>
            </div>
            <button className="col-3 col-lg-1 btn btn-lg btn-secondary" 
            onClick={backToTop}>To top</button>
        </div>
    )
}