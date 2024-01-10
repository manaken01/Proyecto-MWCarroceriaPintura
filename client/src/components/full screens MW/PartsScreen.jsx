import { useState } from 'react'
import Navbar from '../objects/Navbar';
import CardsFull from '../objects/CardsFull';
import SearchFiltersParts from '../objects/SearchFiltersParts';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartsScreen() {
  const [selectedItems, setSelectedItems] = useState(Array(4).fill('Seleccione'));
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
                    <h1>Repuestos en venta</h1>
                </div>
      <SearchFiltersParts selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
      
      <CardsFull filters={selectedItems}/>

      
    </div>
  );
}

export default PartsScreen
