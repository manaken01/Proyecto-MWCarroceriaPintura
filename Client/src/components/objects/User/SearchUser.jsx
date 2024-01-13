import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from 'react-bootstrap';
import CarSellForm from '../../forms/CarSellForm';
import axios from 'axios';
/*<div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ width: '200%', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', marginLeft: '20%' }}>Buscar</button>
                        </div>*/
const SearchUser = ({dropdowns, setSelectedItems, handleResults,setSearch, search}) => {
    
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
    
    return (

        <div className="container" style={{ backgroundColor: "#F9F9F9", marginBottom: '4%',boxShadow: "#E3E3E3 3px 3px 3px", width: '40%' }}>
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="input-group mb-3 align-items-center" style={{ paddingTop: '4%', paddingBottom: '2%' , width: '100%', minWidth: '250px'}}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">🔍</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar usuario" value={search} onChange={handleBrandChange} aria-label="searchUser" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SearchUser;