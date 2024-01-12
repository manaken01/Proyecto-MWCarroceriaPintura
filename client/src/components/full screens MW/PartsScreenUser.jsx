import { useState } from 'react'
import Navbar from '../objects/Navbar';
import CardsPartUser from '../objects/Parts/CardsPartUser';
import SearchFiltersPartsUser from '../objects/Parts/SearchFiltersPartsUser';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartsScreenUser() {
  const [selectedItems, setSelectedItems] = useState(Array(4).fill('Seleccione'));
  const [search, setSearch] = useState('');
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
                    <h1>Repuestos en venta</h1>
                </div>
      <SearchFiltersPartsUser  setSelectedItems={setSelectedItems} search = {search} setSearch ={setSearch}/>
      
      <CardsPartUser filters={selectedItems} search = {search}/>

    </div>
  );
}

export default PartsScreenUser
