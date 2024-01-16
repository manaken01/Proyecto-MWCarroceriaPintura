import { useState, useEffect } from 'react'
import Navbar from '../objects/Navbar';
import CardsPartAdmin from '../objects/Parts/CardsPartAdmin';
import SearchFiltersPartsAdmin from '../objects/Parts/SearchFiltersPartsAdmin';
import { useParams } from "react-router-dom";
import UserProfile from '../resources/UserProfile';
import axios from 'axios';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function PartsScreenAdmin() {
  const [cards, setCards] = useState([]);
  const [dropdowns, setDropdowns] = useState([]);
  const { brand } = useParams();
  const [favorites, setFavorites] = useState([]);


  const handleResults = async () => {
    try {
          const response = await axios.get('http://localhost:8080/carPart');
          if(response.data.Result === undefined || response.data.Result === null ) return;
          setCards(response.data.Result);
          const initialBrands = ['Seleccione', 'TOYOTA', 'HYUNDAI', 'NISSAN', 'HONDA', 'KIA', 'MITSUBISHI', 'CHEVROLET', 'MAZDA', 'SUSUKI'];
          const brands = [...new Set([...initialBrands, ...response.data.Result.map(item => item.parts.nameBrand)])];

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

        
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };
    

  const handleFavorites = async () => {
    if (UserProfile.getId() !== 0) {
      try {
        const response = await axios.get('http://localhost:8080/favorites', {
          params: {
            idUser: UserProfile.getId(),
            status: 1
          }
        });
        if(response.data.Result === undefined || response.data.Result === null ) return;
        const fav = [...new Set(response.data.Result.map(item => item.idPart))];
        setFavorites(fav);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    } else {
      setFavorites([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleResults();
      await handleFavorites();
    };
  
    fetchData();
  }, []);

  const [selectedItems, setSelectedItems] = useState(Array(4).fill('Seleccione'));
  const [search, setSearch] = useState('');
  return (
    <div>
      <Navbar />
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '80px', paddingBottom: '3%' }}>
        <h1>Repuestos en venta</h1>
      </div>
      <SearchFiltersPartsAdmin brand={brand} handleResults={handleResults} dropdowns={dropdowns} setSelectedItems={setSelectedItems} search={search} setSearch={setSearch} />

      <CardsPartAdmin refreshFavorites={handleFavorites} favorites={favorites} refreshParent={handleResults} cards={cards} filters={selectedItems} search={search} />

    </div>
  );
}

export default PartsScreenAdmin
