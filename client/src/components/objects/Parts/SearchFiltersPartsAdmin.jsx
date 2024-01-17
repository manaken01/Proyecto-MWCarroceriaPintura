import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from 'react-bootstrap';
import PartsForm from '../../forms/PartsForm';
import BrandsForm from '../../forms/BrandsForm';
/**
 * Component that displays the filters for the parts. Include the add part button and the add brand button for the admin
 * @param {*} 
 * brand: brand to filter
 * dropdowns: list of dropdowns to filter
 * setSelectedItems: function to update the list of selected items
 * handleResults: function to update the list of parts
 * setSearch: function to update the search bar
 * search: input of the search bar
 * @returns component
 */
const SearchFiltersPartsAdmin = ({brand,dropdowns, setSelectedItems, handleResults,setSearch, search}) => {
    
    const [tempSelectedItems, setTempSelectedItems] = useState(Array(4).fill('Seleccione'));
    

    const [showRepuestoModal, setShowRepuestoModal] = useState(false);
    const [showMarcaModal, setShowMarcaModal] = useState(false);

    const handleClose = () => {
        setShowRepuestoModal(false);
        setShowMarcaModal(false);
    };

    const handleShowRepuestoModal = () => setShowRepuestoModal(true);
    const handleShowMarcaModal = () => setShowMarcaModal(true);

    const handleSelect = (index, value) => {
        const newTempSelectedItems = [...tempSelectedItems];
        newTempSelectedItems[index] = value;
        setTempSelectedItems(newTempSelectedItems);
    };
    const handleFilter = () => {
        setSelectedItems(tempSelectedItems);
    };

    const handleBrandChange = (event) => {
        setSearch(event.target.value);
        //console.log(search);
    }
    useEffect(() => {
        if (brand !== 'No') {
          setSelectedItems([brand, 'Seleccione', 'Seleccione', 'Seleccione']);
          setTempSelectedItems([brand, 'Seleccione', 'Seleccione', 'Seleccione']);
        }
      }, [brand]);
    return (

        <div className="container" style={{ marginBottom: '4%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="input-group mb-3 align-items-center" style={{ paddingTop: '2%', width: '50%', minWidth: '250px', }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">🔍</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar repuesto" value={search} onChange={handleBrandChange} aria-label="searchCar" aria-describedby="basic-addon1" />
                        
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
                                    <Dropdown.Item href="#" key={itemIndex} onClick={() => handleSelect(index, item)}>{item}</Dropdown.Item>
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
                    <button className="btn btn-outline-secondary" onClick={handleShowMarcaModal} style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', marginRight: '2%' }}>Agregar nueva marca</button>
                    <button className="btn btn-outline-secondary" onClick={handleShowRepuestoModal} style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }} >Agregar nuevo repuesto</button>
                </div>
                <Modal show={showRepuestoModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                        <PartsForm refreshParent={handleResults} closeForm = {handleClose}/>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Footer>
                </Modal>

                <Modal show={showMarcaModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                    <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                        <BrandsForm refreshParent={handleResults} closeForm = {handleClose}/>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};

export default SearchFiltersPartsAdmin;