import React, { useState } from 'react';
import CardCalendarStart from './CardCalendarStart';
import axios from 'axios';

function SideBarCalendar({appointmentsItemsA}) {
    return (
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style= {{maxWidth: '100%'}}>
        <a class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <span class="fs-5 fw-semibold" style={{marginTop: '10%'}}>Citas agendadas</span>
        </a>
        <div class="list-group list-group-flush border-bottom scrollarea">
            <CardCalendarStart appointmentsItems={appointmentsItemsA}/>
        </div>
  </div>
    );
}

export default SideBarCalendar;