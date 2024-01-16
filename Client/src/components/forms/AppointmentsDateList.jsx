import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Divider from '../decoration/Divider';
import DeleteButton from '../../assets/DeleteButton.png';
import axios from 'axios';
import UserProfile from '../resources/UserProfile';
//acordarse que hace falta refrescar los filtros despues de agregar marca o repuesto
function AppointmentsDateList({appointments,date}) {


    const handleAppointmentDelete = async (idAppointment) => {
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar esta cita?");
        if (confirmDelete) {

            const getData = async () => {
                console.log(idAppointment)
                try {
                    const response = await axios.delete('http://localhost:8080/appointment', {
                        data: {
                            idAppointment: idAppointment
                        }
                    });
                 
                    alert('Se ha eliminado la cita de forma correcta');
                    if (response.status === 200) {
                        window.location.reload();
                    }

                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };

            getData();

        } else {
            alert('La cita no ha sido eliminada');
        }
    }

    return (

        <div className="card mb-3" style={{ border: '0px', backgroundColor: "#F9F9F9" }} >
            <div className="row g-0">
                <div className="card-body">
                    <h4 className="card-title" style={{ color: '#000000' }} >Citas del: {date} </h4>


                    <Divider />
                    <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>

                    <ul className="list-group list-group-horizontal">
                        <div className="row">
                            {appointments.map((appointment, index) => (
                                <div key={index}> {/* Puedes ajustar la clase 'col-6' según tus necesidades */}
                                   <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        {appointment.service} | {appointment.hour} |
                                        <button
                                            type="button"
                                            className="btn"
                                            style={{ backgroundColor: 'transparent', width: 'auto', height: 'auto%' }}
                                            onClick={() => { handleAppointmentDelete(appointment.idAppointment); }}
                                        >
                                            <img src={DeleteButton} style={{ height: 'auto', width: 'auto' }} alt="Delete" />
                                        </button>
                                    </li>
                                </div>
                            ))}
                        </div>
                    </ul>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default AppointmentsDateList;