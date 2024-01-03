import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Modal } from 'react-bootstrap';
import PartsForm from '../forms/PartsForm';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SearchFiltersParts = () => {
    const dropdowns = [
        { label: 'Marca:', items: ['Toyota', 'Honda', 'Ford', 'Chevrolet'] },
        { label: 'Carro:', items: ['2000', '2005', '2010', '2015'] },
        { label: 'Categoría:', items: ['Sedan', 'SUV', 'Coupe', 'Hatchback'] },
        { label: 'Repuestos:', items: ['Manual', 'Automático', 'CVT', 'Dual-Clutch'] },
    ];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    function navigateToForm() {
        navigate("/form");
    }

    return (

        <div className="container" style={{ marginBottom: '4%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="input-group mb-3 align-items-center" style={{ paddingTop: '2%', width: '50%', minWidth: '250px', }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">🔍</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar carro" aria-label="searchCar" aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ width: '200%', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', marginLeft: '20%' }}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                {dropdowns.map((dropdown, index) => (
                    <div className="col" key={index}>
                        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{dropdown.label}</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ width: '100%' }}>
                                Seleccione
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {dropdown.items.map((item, itemIndex) => (
                                    <Dropdown.Item href="#" key={itemIndex}>{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ))}
            </div>
            <div className="row mt-3 mb-3" style={{ paddingBottom: '2%' }}>
                <div className="col d-flex justify-content-start">
                    <button className="btn btn-outline-secondary" style={{ width: '10%', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', minWidth: '100px' }}>Filtrar</button>
                </div>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-outline-secondary" style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', marginRight: '2%' }}>Agregar nueva marca</button>
                    <button className="btn btn-outline-secondary" onClick={handleShow} style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }} >Agregar nuevo repuesto</button>
                </div>
                <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}> 
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                        <PartsForm />
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};

export default SearchFiltersParts;