import React from 'react';
import CardCalendar from './CardCalendar';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
import { useState, useEffect} from 'react';

function CardCalendarStart ({appointmentsItems}) {
    return (
        <div>{
            appointmentsItems.map((appointmentData, index) => (
                <div key={appointmentData.idAppointment}>
                    <CardCalendar date={appointmentData.date} hour={appointmentData.hour} reason={appointmentData.service} car={appointmentData.licensePlate} />
                </div>
            ))
        }
        </div>
    )
}

export default CardCalendarStart;
