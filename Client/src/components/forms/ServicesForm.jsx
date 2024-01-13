import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Divider from '../decoration/Divider';
import DeleteButton from '../../assets/DeleteButton.png';
import axios from 'axios';

//acordarse que hace falta refrescar los filtros despues de agregar marca o repuesto
function ServicesForm({ }) {
    const [services, setServices] = useState([]);
    const [idService, setidService] = useState('');
    const [showMarcaModal, setShowMarcaModal] = useState(false);
    var [responseData, setResponse] = useState([]);

    const handleClose = () => {
        setShowMarcaModal(false);
    };
    const handleShowMarcaModal = (idService) => {
        setidService(idService);
        setShowMarcaModal(true);
    };

    const getServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/service');
            return response.data.Result.map((result) => result);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResultsServices = async () => {
        try {
            const serviceItems = await getServices();
            //console.log(brandItems);
            //console.log(dropdownItems); // Verify that dropdownItems contains the expected data
            setServices(serviceItems);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
        handleResultsServices();
    }, []);

    //---------
    const [reason, setReason] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleServiceChange = (event) => {
        setReason(event.target.value);
    }



    const handleServices = () => {
        const doesExist = services.some(serviceV => serviceV.service === reason);
        if (!doesExist) {
            const getData = async () => {
                try {
                    const response = await axios.post('http://localhost:8080/service', {
                        service: reason
                    });
                    //console.log(response.data);
                    setReason('');
                    alert('Se ha agregado el servicio de forma correcta');
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
            alert('El servicio ya existe');
        }
    }

    const handleServicesDelete = (idService) => {
        console.log(idService)
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar este servicio?");
        if (confirmDelete) {

            const getData = async () => {
                try {
                    console.log(idService);
                    const response = await axios.delete(`http://localhost:8080/service/${idService}`);
                    alert('Se ha eliminado el servicio de forma correcta');
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
            alert('El servicio no ha sido eliminado');
        }
    }

    const handleServicesEdit = () => {
        console.log(idService)
        const confirmEdit = window.confirm("¿Seguro que deseas modificar este servicio?");
        if (confirmEdit) {
            const doesExist = services.some(serviceV => serviceV.service === reason);
            if (!doesExist) {
                const getData = async () => {
                    try {
                        const response = await axios.put(`http://localhost:8080/service`,
                        {
                            service: reason,
                            idService: idService
                        });
                        setReason('');
                        alert('Se ha modificado la marca de forma correcta');
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
                alert('El servicio ya existe');
            }

        } else {
            alert('El servicio no ha sido modificado');
        }
        
    }

    return (

        <div className="card mb-3" style={{ border: '0px', backgroundColor: "#F9F9F9" }} >
            <div className="row g-0">
                <div className="card-body">

                    <h4 className="card-title" style={{ color: '#000000' }} >Agregar nuevo servicio</h4>


                    <Divider />
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Nombre:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="nombre" className="form-control" aria-label="nombre" aria-describedby="basic-addon1" value={reason} onChange={handleServiceChange} />
                        </div>
                        <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }} onClick={handleServices}>
                            Agregar
                        </button>

                    </div>

                    <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>

                        <ul className="list-group">
                            <div className="row ">
                                {services.map((serviceV, index) => (
                                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                        {serviceV.service}
                                        <div>
                                            <button
                                                type="button" className="btn" style={{ backgroundColor: 'transparent', width: 'auto', height: 'auto%' }}
                                                onClick={() => { handleServicesDelete(serviceV.idService); }}
                                            >
                                                <img src={DeleteButton} style={{ height: 'auto', width: 'auto' }} alt="Delete" />
                                            </button>
                                            <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}
                                                onClick={() => { handleShowMarcaModal(serviceV.idService); }}>
                                                Modificar
                                            </button>
                                            <Modal show={showMarcaModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                                                <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                                                </Modal.Header>
                                                <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                                    <div className="card mb-3" style={{ border: '0px', backgroundColor: "#F9F9F9" }} >
                                                        <div className="row g-0">
                                                            <div className="card-body">

                                                                <h4 className="card-title" style={{ color: '#000000' }} >Modificar servicio</h4>


                                                                <Divider />
                                                                <div className="d-flex align-items-center">
                                                                    <p className="card-text"><strong>Servicio:</strong></p>
                                                                    <div className="input-group ml-3" style={{ padding: '2%' }}>
                                                                        <input type="text" id="nombre" className="form-control" aria-label="nombre" aria-describedby="basic-addon1" value={reason} onChange={handleServiceChange} />
                                                                    </div>
                                                                    <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }} 
                                                                    onClick={() => { handleServicesEdit() }}>
                                                                        Modificar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </li>

                                ))}
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ServicesForm;