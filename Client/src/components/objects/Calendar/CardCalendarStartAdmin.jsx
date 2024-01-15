import React from 'react';
import CardCalendar from './CardCalendar';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
import { useState, useEffect} from 'react';
import CardCalendarAdmin from './CardCalendarAdmin';

function CardCalendarStartAdmin ({appointmentsItems}) {
    return (
        <div>{
            appointmentsItems.map((appointmentData, index) => (
                <div key={appointmentData.idAppointment}>
                    <CardCalendarAdmin date={appointmentData.date} hour={appointmentData.hour} reason={appointmentData.service} car={appointmentData.licensePlate} appointmentID={appointmentData.idAppointment}/>
                </div>
            ))
        }
        </div>
    )
}

export default CardCalendarStartAdmin;
