import { useState, useEffect} from 'react';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import MyCarForm from './MyCarForm';
import UserProfile from '../resources/UserProfile';
import { formatDate } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';

function AppointmentFormModified({date,hourM}) {
    
    const formattedDate = new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',timeZone: 'UTC' });
    const formattedDateForm = new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'numeric', day: 'numeric',timeZone: 'UTC' });
    const [dropdowns, setDropdowns] = useState([]);
    var [responseData, setResponse] = useState([]);
    var [responseDataService, setResponseService] = useState([]);
    const [selectedItems, setSelectedItems] = useState(Array(dropdowns.length).fill('Seleccione'));
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getDropdownsCars = async () => {
        try {
            const response = await axios.get('http://localhost:8080/carUser', {
                    params: {
                        idUser: UserProfile.getId(),
                    }
            });
            setResponse(response.data.Result);
            return response.data.Result.map((result) => result.licensePlate);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const getDropdownServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/service');
            setResponseService(response.data.Result);
            return response.data.Result.map((result) => result.service);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResults = async () => {
        try {
            const dropdownItemsCars = await getDropdownsCars();
            const dropdownItemsServices = await getDropdownServices();
            setDropdowns([
                { label: 'Hora:', items: ['12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00'] },
                { label: 'Razón:', items: dropdownItemsServices },
                { label: 'Carro:', items: dropdownItemsCars },
                
            ]);
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };


    useEffect(() => {
        handleResults();
    }, []);
    

    const dropdownHandlers = [
        (item) => handleSelectHour(0, item),  // Para el primer dropdown
        (item) => handleSelectReason(1, item),  // Para el segundo dropdown
        (item) => handleSelectCar(2, item)   // Para el tercer dropdown
      ];

    const handleSelectHour = (index, value) => {
        
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setHour(value);
   
    }

    const handleSelectReason = (index, value) => {
        
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setIdReason(getIdReason(value));
   
    }
   
    const handleSelectCar = (index, value) => {
        
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setIdCarUser(getIdCarUser(value));
   
    }
    //-------------
    const [hour, setHour] = useState('');
    const [idCarUser, setIdCarUser] = useState('');
    const [idReason, setIdReason] = useState('');

    const resetInputs = () => {
        setHour('');
        setIdCarUser('');
        setIdReason('');
    };

    const getIdCarUser = (licensePlate) => {
        const carUser = responseData.find((item) => item.licensePlate === licensePlate);
        return carUser ? carUser.idCarUser : null;
    };

    const getIdReason = (service) => {
        const reason = responseDataService.find((item) => item.service === service);
        return reason ? reason.idService : null;
    };
    
    const validateInputs = () => {
        if (!hour || !idCarUser || !idReason) {
            alert('Se deben llenar obligatoriamente los campos de: hora, razón y carro');
            return false;
        }
        return true;
    };

    const handleAppointmentUpdate = async () => {
        const confirmEdit = window.confirm("¿Seguro que deseas modificar este carrro?");
        if (confirmEdit) {

            if (!validateInputs()) {
                return;
            }    
    
            const getAppointmentId = async () => {
                try {
    
                    const response = await axios.get('http://localhost:8080/appointmentID', {
                        params: {
                            date: formattedDateForm,
                            hour: hourM,
                        }
                    });
                    return response.data
                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };

            const [appointmentID] = await Promise.all([
                getAppointmentId(),
            ]);

            const getData = async () => {
                console.log(appointmentID)
                    try {
                        const response = await axios.put(`http://localhost:8080/appointment`,
                        {
                            date: formattedDateForm,
                            hour: hour,
                            idCarUser: idCarUser,
                            idUser: UserProfile.getId(),
                            idService: idReason,
                            idAppointment: appointmentID.Result[0].idAppointment,
                        });
                        alert('Se ha modificado la cita de forma correcta');
                        resetInputs();
                        setResponse(response.data);
                        if (response.status === 200) {
                            window.location.reload();
                        }
                    } catch (error) {
                        console.error('Error al realizar la solicitud:', error);
                    }
                };
                getData();

        } else {
            alert('La cita no ha sido modificada');
        }
        
    }

    return (
        
            <div className="card mb-3" style={{ border:'0px' ,backgroundColor: "#F9F9F9" }} >
                <div className="row g-0">
                    <div className="card-body">

                        <h4 className="card-title" style={{ color: '#000000' }} >Modificar cita</h4>


                        <Divider />
                        <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong>Dia: {formattedDate}</strong></p>
                        <div className="col">
                            {dropdowns.map((dropdown, index) => (
                                <div className="col" key={index}>
                                    <p style={{ fontWeight: 'bold', marginBottom: '1%' }}>{dropdown.label}</p>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ width: '100%' }}>
                                            {selectedItems[index]}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {dropdown.items.map((item, itemIndex) => (
                                                <Dropdown.Item href="#" key={itemIndex} onClick={() => dropdownHandlers[index](item) } >{item}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>
                        

                        <div className="col d-flex justify-content-between">
                            <button type="button" className="btn btn-danger" onClick={handleShow}  style={{ marginTop: '10%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                Agregar carro
                            </button>
                            <button type="button" className="btn btn-danger" onClick={handleAppointmentUpdate}  style={{ marginTop: '10%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                Confirmar
                            </button>
                        </div>
                        <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}> 
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                <MyCarForm />
                            </Modal.Body>
                            <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        
    );
}

export default AppointmentFormModified;