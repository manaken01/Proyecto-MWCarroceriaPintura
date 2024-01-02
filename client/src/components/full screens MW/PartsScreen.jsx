import { useState } from 'react'
import Navbar from '../objects/Navbar';
import CardsFull from '../objects/CardsFull';
import SearchFiltersParts from '../objects/SearchFilters';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartsScreen() {
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', padding: '3%'}}>
                    <h1>Repuestos en venta</h1>
                </div>
      <SearchFiltersParts/>
      
      <CardsFull/>

      
    </div>
  );
}

export default PartsScreen
