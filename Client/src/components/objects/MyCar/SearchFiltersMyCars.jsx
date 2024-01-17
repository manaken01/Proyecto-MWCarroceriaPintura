import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Modal } from 'react-bootstrap';
import PartsForm from '../../forms/PartsForm';
import { useNavigate } from "react-router-dom";
import MyCarForm from '../../forms/MyCarForm';
import { useState , useEffect } from 'react'

/**
 * Component to display filters search of car user
 * @param {*} 
 * dropdowns: dropdowns to load
 * setSelectedItems: selected items of the dropdowns
 * setSearch: function to set search
 * search: the car user that is searching the user
 * @returns component
 */
function SearchFiltersMyCars({dropdowns, setSelectedItems,setSearch, search}) {
    
    const [tempSelectedItems, setTempSelectedItems] = useState(Array(2).fill('Seleccione'));
    
    const handleCarChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSelect = (index, value) => {
        const newTempSelectedItems = [...tempSelectedItems];
        newTempSelectedItems[index] = value;
        setTempSelectedItems(newTempSelectedItems);
    };
    const handleFilter = () => {
        setSelectedItems(tempSelectedItems);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="container" style={{ marginBottom: '4%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="input-group mb-3 align-items-center" style={{ paddingTop: '2%', width: '50%', minWidth: '250px', }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">🔍</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar carro por placa"  value={search} onChange={handleCarChange} aria-label="searchCar" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
            <div className="row ">
                {dropdowns.map((dropdown, index) => (
                    <div className="col" key={index}>
                        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{dropdown.label}</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ width: '100%' }}>
                                {tempSelectedItems[index]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {dropdown.items.map((item, itemIndex) => (
                                    <Dropdown.Item href="#" key={itemIndex} onClick={() => handleSelect(index, item)} >{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ))}
            </div>
            <div className="row mt-3 mb-3" style={{ paddingBottom: '2%' }}>
                <div className="col d-flex justify-content-start">
                    <button className="btn btn-outline-secondary" onClick={handleFilter} style={{ width: '10%', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', minWidth: '100px' }}>Filtrar</button>
                </div>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-outline-secondary" onClick={handleShow} style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }} >Agregar nuevo carro</button>
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
    );
};

export default SearchFiltersMyCars;