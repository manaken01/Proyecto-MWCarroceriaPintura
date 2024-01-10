import React from 'react';
import CardCalendar from './CardCalendar';
import axios from 'axios';
import UserProfile from '../resources/UserProfile';

const cards = [
    { id: 1, date: 'Martes 18 de diciembre', hour: '13:00 - 18:00',reason:'Mantenimiento auto honda', car: 'Honda 2008'},
    { id: 2, date: 'Martes 18 de diciembre', hour: '13:00 - 18:00',reason:'Mantenimiento auto honda', car: 'Honda 2008'},
    { id: 3, date: 'Martes 18 de diciembre', hour: '13:00 - 18:00',reason:'Mantenimiento auto honda', car: 'Honda 2008'},
    { id: 4, date: 'Martes 18 de diciembre', hour: '13:00 - 18:00',reason:'Mantenimiento auto honda', car: 'Honda 2008' },
  ]

function CardCalendarStart () {

    return (
        <div>{
            cards.map(card => (
                <div key={card.id}>
                    <CardCalendar date={card.date} hour={card.hour} reason={card.reason} car={card.car} />
                </div>
            ))
        }
        </div>
    )
}

export default CardCalendarStart;
