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
import AppointmentsDateList from '../forms/AppointmentsDateList';
import SideBarCalendarAdmin from '../objects/Calendar/SideBarCalendarAdmin';

function CalendarAdmin() {
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [initialEvents, setInitialEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [appointments, setAppointments] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (selectInfo) => {

    const filteredAppointments = appointments.filter(appointment => {
      
      const appointmentDate = new Date(appointment.date).toISOString().replace(/T.*$/, '')
      const selectedDate = selectInfo.start.toISOString().replace(/T.*$/, '')
      return appointmentDate === selectedDate;
    });

    // Ahora, filteredAppointments contiene solo los elementos cuya fecha coincide con selectInfo.start
    // Puedes guardar o utilizar la lista filtrada según tus necesidades
    const formattedDate = new Date(selectInfo.start).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',timeZone: 'UTC' });
    setFilteredAppointments(filteredAppointments);
    setSelectedDate(formattedDate)
    setShow(true); // Muestra el modal
  };
  const handleShowServicesClose = () => setShowServices(false);
  const handleShowServicesOpen = () => setShowServices(true);


  const getAppointments = async () => {
      try {
          const response = await axios.get('http://localhost:8080/appointmentAdmin');
          setAppointments(response.data.Result)
          const events = response.data.Result.map((appointment, index) => ({
              id: appointment.idAppointment,  // Asegúrate de tener un identificador único para cada evento
              title: 'Cita: '+appointment.hour,  // Puedes personalizar el título según tus necesidades
              start: new Date(appointment.date).toISOString().replace(/T.*$/, '')
          }));

        // Actualiza los eventos iniciales
          setInitialEvents(events);

          return events;
      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
          return []; // Return an empty array or handle the error gracefully
      }
  };    

  useEffect(() => {
      getAppointments();
  }, []);
  
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
          events={initialEvents}
          select={handleShow}
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
                <AppointmentsDateList appointments={filteredAppointments} date={selectedDate}/>
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
      <SideBarCalendarAdmin appointmentsItemsA={appointments}/>

    </div>
  );
}

export default CalendarAdmin;
