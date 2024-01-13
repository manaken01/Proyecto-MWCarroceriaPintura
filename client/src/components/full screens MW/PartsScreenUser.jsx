import { useState , useEffect } from 'react'
import Navbar from '../objects/Navbar';
import CardsPartUser from '../objects/Parts/CardsPartUser';
import SearchFiltersPartsUser from '../objects/Parts/SearchFiltersPartsUser';

import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartsScreenUser() {
  const [cards, setCards] = useState([]);
  const [dropdowns, setDropdowns] = useState([]);


  const handleResults = async () => {
    try {
      axios.get('http://localhost:8080/carPart')
        .then(response => {
          setCards(response.data.Result);
          const brands = [...new Set(response.data.Result.map(item => item.parts.nameBrand))];
          brands.unshift('Seleccione');
          const cars = [...new Set(response.data.Result.map(item => item.parts.car))];
          cars.unshift('Seleccione');
          const categories = [...new Set(response.data.Result.map(item => item.parts.category))];
          categories.unshift('Seleccione');
          const names = [...new Set(response.data.Result.map(item => item.parts.name))];
          names.unshift('Seleccione');

          const result = [
            { label: 'Marca:', items: brands },
            { label: 'Carro:', items: cars },
            { label: 'Categoría:', items: categories },
            { label: 'Repuestos:', items: names },
          ];
    
          setDropdowns(result);

        })
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    handleResults();
  }, []);

  const [selectedItems, setSelectedItems] = useState(Array(4).fill('Seleccione'));
  const [search, setSearch] = useState('');
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
                    <h1>Repuestos en venta</h1>
                </div>
      <SearchFiltersPartsUser  dropdowns={dropdowns} setSelectedItems={setSelectedItems} search = {search} setSearch ={setSearch}/>
      
      <CardsPartUser cards={cards} filters={selectedItems} search = {search}/>

    </div>
  );
}

export default PartsScreenUser
