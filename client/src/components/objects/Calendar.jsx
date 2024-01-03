import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from '../resources/event-utils';
import esLocale from '@fullcalendar/core/locales/es';

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    if (title) selectInfo.view.calendar.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => setCurrentEvents(events);

  const renderEventContent = (eventInfo) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );

  const renderSidebarEvent = (event) => (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  );

  return (
    <div className='demo-app' style={{ paddingTop: '80px', padding: '3%', display: 'flex', minHeight: '100%', fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif', fontSize: '90%' }}>
      <div className='demo-app-main' style={{ flexGrow: '1', padding: '3em' }}>
        <div style={{ 
          fontSize: '2.3em', 
          fontWeight: '600', 
          color: '#000000',
          textAlign: 'left',
          marginBottom: '1%'
        }}>
          Agendar cita
        </div>
        <FullCalendar 
          locale={esLocale}  
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventsSet={handleEvents}  
          dayCellContent={({ dayNumberText }) => {
            return (
              <span style={{ color: 'black'}}>
                {dayNumberText}
              </span>
            );
          }}        
        />
      </div>
      <div className='demo-app-sidebar' style={{ marginTop: '3%', width: '18%' }}>
        <div className='demo-app-sidebar-section' style={{ padding: '2em' }}>
          <h2><strong>Citas agendadas</strong></h2>
          <div className="card mb-3" style={{ maxWidth: '100%', backgroundColor: "transparent", boxShadow: "none", border: 'none' }}>
                  <div className="row g-0">
                      <div className="col-md-12">
                          <div className="card-body">
                              <h5 className="card-title" style={{ fontSize: '1.5em', fontWeight: '500', color: '#000000' }}>Repuestos de alta calidad</h5>
                              <p className="card-text" style={{ fontSize: '1.3em', fontWeight: '400', color: '#000000' }}>
                              Todos los repuestos son de alta calidad, con apenas uso y comprobados al 100% de que estan en buen estado.
                              </p>
                          </div>
                      </div>
                  </div>
            </div>
        
        </div>
        <div className='demo-app-sidebar-section' style={{ padding: '2em' }}>
          <h2>All Events ({currentEvents.length})</h2>
          <ul>
            {currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
