import React from "react";
import NavigationBar from "../components/Nav";
import Footer from "../components/Footer";
import bubbleTea1 from "../img/frank-zhang-uJjeWXc7lMM-unsplash.jpg";
import bubbleTea2 from "../img/orimi-protograph-dHQQv-BKTjo-unsplash.jpg";
import bubbleTea3 from "../img/rosalind-chang-P_wPicZYoPI-unsplash.jpg";
import bubbleTea4 from "../img/tabitha-turner-9kmc91fYHwE-unsplash.jpg";
import header1 from "../img/wepik-photo-mode-2022727-124748.png";
import './routes.css';
import sugar from "../img/sugar.png";
import weakness from "../img/weakness.png";
import body from "../img/body.png";

export default function Home(){
    return(
        <>
        <NavigationBar/>
        <div className="row container-fluid m-0 align-items-center justify-content-evenly" style={{height: '75vh', backgroundColor: '#eb9347'}}>
            <div className="col-lg-5 col-12">
                <h1 className="display-2 fw-bold text-white">One website. Every intake.</h1>
                <p className="fs-4">More than a reminder. To motivate change in habit. Start improving your health today.</p>
                <a href="/signup"><button type="button" id="signup-button"
                className="btn btn-lg px-4 text-white fw-bold border-white border-0">
                    Try Sip free
                </button></a>
            </div>
            <div className="col-lg-6 col-10 mb-4 mb-lg-0 d-flex justify-content-center">
                <img src={header1} alt="bubble tea" className="col-lg-12 col-10 col-md-8 rounded"></img>
            </div>
        </div>
        <div className="container-fluid">
            <hr/>
            <div className="container-fluid">
                <div className="row align-items-center m-lg-5 m-0 py-lg-5 py-4">
                    <img src={sugar} alt="sugar" className="col-lg-4 col-xl-3 col-4 me-lg-4 mb-4 mb-lg-0"></img>
                    <div className="col-lg-5 col-md-8">
                        <h1>Sugar level</h1>
                        <p className="fs-4">
                            The amount of sugar present in a cup of bubble tea is as follows. 
                            A medium-sized 500ml bubble milk tea with pearls and the full amount of sugar 
                            has 8 teaspoons of sugar and 335 calories. The larger 700ml size has 11 teaspoons 
                            of sugar and 469 calories.
                        </p>
                    </div>
                    <div className="col-3 ms-5 d-none d-xl-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="#eb9347" className="bi bi-1-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
                        </svg>
                    </div>
                </div>
                <div className="row align-items-center justify-content-end d-block d-md-flex m-lg-5 m-0 py-lg-5 py-4">
                    <div className="col-3 me-5 d-none d-xl-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="#eb9347" className="bi bi-2-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
                        </svg>
                    </div>
                    <img src={body} alt="obesity" className="col-4 mx-lg-5 d-lg-none mb-4 mb-lg-0"></img>
                    <div className="col-lg-5 col-md-8">
                        <h1>Obesity</h1>
                        <p className="fs-4">
                            One 16‐ounce boba drink exceeds the upper limit of added sugar intake 
                            recommended by the 2015 US Dietary Guidelines Advisory Committee. The high 
                            caloric and sugar content of boba beverages pose public health concerns as 
                            they have the potential to further exacerbate the childhood obesity epidemic.
                        </p>
                    </div>
                    <img src={body} alt="obesity" className="col-4 col-xl-3 d-none d-lg-block"></img>
                </div>
                <div className="row align-items-center mb-lg-5 m-0 pb-lg-5 p-0">
                    <img src={weakness} alt="fatigue" className="col-xl-3 col-lg-4 col-4 me-lg-4 mb-4 mb-lg-0"></img>
                    <div className="col-lg-5 col-12 col-md-8">
                        <h1>Restlessness</h1>
                        <p className="fs-4">
                            Tea leaves naturally contain caffeine. Overconsuming caffeine from tea, or any other source,
                            may contribute to feelings of anxiety, stress, and restlessness. An average cup (240 ml) 
                            of tea contains about 11–61 mg of caffeine, depending on the variety and brewing method.
                        </p>
                    </div>
                    <div className="col-3 ms-5 d-none d-xl-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="#eb9347" className="bi bi-3-circle" viewBox="0 0 16 16">
                            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="col-12 row justify-content-center mb-5 pb-lg-5 pb-0">
                <div className="row col-lg-4 col-6">
                    <img src={bubbleTea1} alt="bubble tea" className="col-12 m-3"></img>
                    <img src={bubbleTea4} alt="bubble tea" className="col-12 rounded m-3"></img>
                </div>
                <div className="row col-lg-4 col-6">
                    <img src={bubbleTea2} alt="bubble tea" className="col-12 rounded m-3"></img>
                    <img src={bubbleTea3} alt="bubble tea" className="col-12 rounded m-3"></img>
                </div>
                <div className="row col-4 d-none d-lg-flex">
                    <img src={bubbleTea1} alt="bubble tea" className="col-12 m-3"></img>
                    <img src={bubbleTea4} alt="bubble tea" className="col-12 rounded m-3"></img>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}