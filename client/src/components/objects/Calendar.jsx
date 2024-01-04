import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from '../resources/event-utils';
import esLocale from '@fullcalendar/core/locales/es';
import CardCalendar from './CardCalendar';
import CardCalendarStart from './CardCalendarStart';



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
          <CardCalendarStart/>
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
