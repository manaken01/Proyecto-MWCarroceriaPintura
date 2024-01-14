import React, { useState, useEffect } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from '../resources/event-utils';
import esLocale from '@fullcalendar/core/locales/es';
import AppointmentForm from '../forms/AppointmentForm';
import { Button, Modal } from 'react-bootstrap';
import SideBarCalendar from '../objects/Calendar/SideBarCalendar';
import axios from 'axios';
import UserProfile from '../resources/UserProfile';

function CalendarUser() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (selectInfo) => {
    const formattedDate = formatDate(selectInfo.start, { year: 'numeric', month: 'numeric', day: 'numeric', locale: esLocale }); // Formatea la fecha a texto
    setSelectedDate(formattedDate); // Guarda el día seleccionado en el estado
    setShow(true); // Muestra el modal
  };

  const getAppointments = async () => {
    try {
        const response = await axios.get('http://localhost:8080/appointment', {
            params: {
                idUser: UserProfile.getId(),
            }
        });
        
        setAppointments(response.data.Result)
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };  
  
    useEffect(() => {
      getAppointments();
  }, []);



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
          select={handleShow}
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
        <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}> 
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                <AppointmentForm date={selectedDate}/>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
            </Modal.Footer>
        </Modal>
      </div>
      <SideBarCalendar appointmentsItemsA={appointments}/>

    </div>
  );
}

export default CalendarUser;
