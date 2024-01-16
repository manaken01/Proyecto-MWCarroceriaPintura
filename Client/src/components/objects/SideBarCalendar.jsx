import React, { useState } from 'react';
import CardCalendarStart from './CardCalendarStart';


function SideBarCalendar() {
    return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style= {{maxWidth: '100%'}}>
        <a className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
            <span className="fs-5 fw-semibold" style={{marginTop: '10%'}}>Citas agendadas</span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
            <CardCalendarStart/>
        </div>
  </div>
    );
}

export default SideBarCalendar;