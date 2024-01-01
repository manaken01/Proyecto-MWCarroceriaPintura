import { useState } from 'react' 
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SearchFilters = () => {
    const dropdowns = [
        { label: 'Marca:', items: ['Toyota', 'Honda', 'Ford', 'Chevrolet'] },
        { label: 'Año:', items: ['2000', '2005', '2010', '2015'] },
        { label: 'Body Shape:', items: ['Sedan', 'SUV', 'Coupe', 'Hatchback'] },
        { label: 'Transmisión:', items: ['Manual', 'Automático', 'CVT', 'Dual-Clutch'] },
    ];
    const [selectedItems, setSelectedItems] = useState(Array(dropdowns.length).fill('Seleccione'));
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
                        <input type="text" className="form-control" placeholder="Buscar repuestos" aria-label="searchCar" aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ width:'200%' , backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white',marginLeft: '20%'}}>Buscar</button>
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
        <button className="btn btn-outline-secondary" style={{width: '10%', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white', minWidth: '100px'}}>Filtrar</button>
    </div>
    <div className="col d-flex justify-content-end">
        <button className="btn btn-outline-secondary" style={{ backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }}>Agregar nuevo carro</button>
    </div>
</div>
        </div>
    );
};

export default SearchFilters;