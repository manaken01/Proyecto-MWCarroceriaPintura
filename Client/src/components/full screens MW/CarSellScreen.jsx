import { useState } from 'react'
import Navbar from '../objects/Navbar';
import SearchFilters from '../objects/SearchFilters';
import CardsCar from '../objects/CardsCar';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartsScreen() {
    return (
        <div>
            <Navbar />
            <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '80px', paddingBottom: '3%' }}>
                <h1>Carros en venta</h1>
            </div>
            <SearchFilters />

            <CardsCar />


        </div>
    );
}

export default PartsScreen
