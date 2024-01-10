import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from 'react-bootstrap';
import PartsForm from '../forms/PartsForm';
import BrandsForm from '../forms/BrandsForm';

import axios from 'axios';
const SearchFiltersParts = ({selectedItems, setSelectedItems}) => {
    const [dropdowns, setDropdowns] = useState([]);

    const handleResults = async () => {
        try {
            const response = await axios.get('http://localhost:8080/carPart');
            const responseb = await axios.get('http://localhost:8080/brand');
            const brands = [...new Set(responseb.data.Result.map(item => item.name))];
            brands.unshift('Seleccione');
            const cars = [...new Set(response.data.Result.map(item => item.car))];
            cars.unshift('Seleccione');
            const categories = [...new Set(response.data.Result.map(item => item.category))];
            categories.unshift('Seleccione');
            const names = [...new Set(response.data.Result.map(item => item.name))];
            names.unshift('Seleccione');

            const result = [
                { label: 'Marca:', items: brands },
                { label: 'Carro:', items: cars },
                { label: 'Categoría:', items: categories },
                { label: 'Repuestos:', items: names },
            ];

            setDropdowns(result);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    useEffect(() => {
        handleResults();
    }, []);
    

    const [showRepuestoModal, setShowRepuestoModal] = useState(false);
    const [showMarcaModal, setShowMarcaModal] = useState(false);

    const handleClose = () => {
        setShowRepuestoModal(false);
        setShowMarcaModal(false);
    };

    const handleShowRepuestoModal = () => setShowRepuestoModal(true);
    const handleShowMarcaModal = () => setShowMarcaModal(true);

    const handleSelect = (index, value) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
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
                                {selectedItems[index]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {dropdown.items.map((item, itemIndex) => (
                                    <Dropdown.Item href="#" key={itemIndex} onClick={() => handleSelect(index, item)}>{item}</Dropdown.Item>
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
                    <button className="btn btn-outline-secondary" onClick={handleShowMarcaModal} style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', marginRight: '2%' }}>Agregar nueva marca</button>
                    <button className="btn btn-outline-secondary" onClick={handleShowRepuestoModal} style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }} >Agregar nuevo repuesto</button>
                </div>
                <Modal show={showRepuestoModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                        <PartsForm refreshParent={handleResults}/>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Footer>
                </Modal>

                <Modal show={showMarcaModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                        <BrandsForm refreshParent={handleResults}/>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};

export default SearchFiltersParts;