import React from 'react';
import CardCalendar from './CardCalendar';
import axios from 'axios';
import UserProfile from '../resources/UserProfile';
import { useState, useEffect} from 'react';

function CardCalendarStart () {

    const [appointments, setAppointments] = useState([]);

    const getAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/appointment', {
                params: {
                    idUser: UserProfile.getId(),
                }
            });
            return response.data.Result;
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResults = async () => {
        try {
            const appointmentsItems = await getAppointments();
            //console.log(dropdownItems); // Verify that dropdownItems contains the expected data
            setAppointments(appointmentsItems);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
        handleResults();
    }, []);

    return (
        <div>{
            appointments.map((appointmentData, index) => (
                <div key={appointmentData.idAppointment}>
                    <CardCalendar date={appointmentData.date} hour={appointmentData.hour} reason={appointmentData.service} car={appointmentData.licensePlate} />
                </div>
            ))
        }
        </div>
    )
}

export default CardCalendarStart;
