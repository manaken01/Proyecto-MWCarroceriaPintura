import React, { useState,useEffect } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import AppointmentForm from '../forms/AppointmentForm';
import { Button, Modal } from 'react-bootstrap';
import SideBarCalendar from '../objects/Calendar/SideBarCalendar';
import ServicesForm from '../forms/ServicesForm';
import axios from 'axios';

function CalendarAdmin() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [initialEvents, setInitialEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShowServicesClose = () => setShowServices(false);
  const handleShowServicesOpen = () => setShowServices(true);
  const handleShow = (selectInfo) => {
    const formattedDate = formatDate(selectInfo.start, { year: 'numeric', month: 'numeric', day: 'numeric', locale: esLocale }); // Formatea la fecha a texto
    setSelectedDate(formattedDate); // Guarda el día seleccionado en el estado
    setShow(true); // Muestra el modal
  };


  const getAppointments = async () => {
      try {
          const response = await axios.get('http://localhost:8080/appointmentAdmin');
          console.log(response.data.Result)
          
          setAppointments(response.data.Result)
          /*
          const events = appointments.map((appointment, index) => ({
            id: index,
            title: 'All-day event',
            start: appointment.date
          }));

          setInitialEvents(events);*/

          return response.data.Result;
      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
          return []; // Return an empty array or handle the error gracefully
      }
  };    

  useEffect(() => {
      getAppointments();
  }, []);


  /*const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    if (title) selectInfo.view.calendar.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
  };*/

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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ fontSize: '2.3em', fontWeight: '600', color: '#000000', marginBottom: '1%' }}>
            Agendar cita
          </div>
          <div className='btn btn-link' onClick={handleShowServicesOpen} style={{ backgroundColor: 'transparent',fontSize: '1.2em', fontWeight: '600', color: '#C80B16', marginLeft:'auto', marginTop:'2%'}}>
            Agregar servicio
          </div>
        </div>
        <FullCalendar 
          locale={esLocale}  
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          initialEvents={initialEvents}
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
        <Modal show={showServices} onHide={handleShowServicesClose} style={{ backgroundColor: 'transparent' }}>
            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                <ServicesForm/>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
            </Modal.Footer>
        </Modal>
      </div>
      <SideBarCalendar appointmentsItemsA={appointments}/>

    </div>
  );
}

export default CalendarAdmin;
