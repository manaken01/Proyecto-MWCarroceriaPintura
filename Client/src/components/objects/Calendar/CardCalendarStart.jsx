import React from 'react';
import CardCalendar from './CardCalendar';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';
import { useState, useEffect} from 'react';

/**
 * start of cards appointments user
 * @param {*} 
 * appointmentsItemsA: appointments to load
 * @returns component
 */
function CardCalendarStart ({appointmentsItems}) {
    return (
        <div>{
            appointmentsItems.map((appointmentData, index) => (
                <div key={appointmentData.idAppointment}>
                    <CardCalendar date={appointmentData.date} hour={appointmentData.hour} reason={appointmentData.service} car={appointmentData.licensePlate} appointmentID={appointmentData.idAppointment} />
                </div>
            ))
        }
        </div>
    )
}

export default CardCalendarStart;
