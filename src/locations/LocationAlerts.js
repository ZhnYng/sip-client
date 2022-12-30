import React from "react";
import bbtStores from "./bbtStores.json";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

export default function LocationAlert(){
    const [nearBbt, setNearBbt] = React.useState(parseInt(localStorage.getItem('nearBbt')));
    const [reminder, setReminder] = React.useState(false);

    React.useEffect(() => {
        axios.get('/settings/getReminderStatus', {params:{userId: localStorage.getItem('userId')}})
        .then(res => {
            res.data[0].reminder === 1 ? setReminder(true) : setReminder(false);
        })
        .catch(err => {
            console.log(err);
        })

        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (result) => {
                    const latitude = result.coords.latitude.toFixed(1),
                    longitude = result.coords.longitude.toFixed(1);
                    for(const location of bbtStores){
                        if(latitude === location.latitude && longitude === location.longitude){
                            setNearBbt(prevNearBbt => prevNearBbt + 1);
                        }else{
                            setNearBbt(0);
                            console.log(latitude, location.latitude)
                        }
                    }
                }, (err) => {
                    console.log(err.message);
                }
            )
        }, 1000);
    }, [])

    React.useEffect(() => {
        localStorage.setItem('nearBbt', nearBbt);
    }, [nearBbt])
    
    return (
        <>
        {reminder && nearBbt > 60 ? 
            <Alert variant="warning" onClick={() => setNearBbt(0)} dismissible>
                <Alert.Heading>Don't be tempted!</Alert.Heading>
                <p>
                We've noticed that you're stationary at a bubble tea store, move along!
                </p>
            </Alert>
            :
            null
        }
        </>
    )
}