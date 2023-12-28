import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SearchFilters = () => {
    const dropdowns = [
        { label: 'Marca:', items: ['Toyota', 'Honda', 'Ford', 'Chevrolet'] },
        { label: 'Año:', items: ['2000', '2005', '2010', '2015'] },
        { label: 'Body Shape:', items: ['Sedan', 'SUV', 'Coupe', 'Hatchback'] },
        { label: 'Transmisión:', items: ['Manual', 'Automático', 'CVT', 'Dual-Clutch'] },
    ];

    return (
        <div className="container" style={{ marginTop: '5%', marginBottom: '5%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row align-items-center">
                <div className="col-12">
                    <div className="input-group mb-3 align-items-center" style={{ paddingTop: '2%', width: '50%', minWidth: '250px' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">🔍</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar carro" aria-label="searchCar" aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ width:'200%' , backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white',marginLeft: '20%'}}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
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
            <div className="row">
    <div className="col text-left">
        <button className="btn btn-outline-secondary">Left Button</button>
    </div>
    <div className="col text-right">
        <button className="btn btn-outline-secondary ml-auto">Right Button</button>
    </div>
</div>
        </div>
    );
};

export default SearchFilters;