import { useState, useEffect } from 'react'
import Navbar from '../objects/Navbar';
import SearchFilters from '../objects/CarSell/SearchFilters';
import CardsCar from '../objects/CarSell/CardsCar';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function CarSellScreen() {
    const [cards, setCards] = useState([]);
    const [dropdowns, setDropdowns] = useState([]);


    const handleResults = async () => {
        axios.get('http://localhost:8080/carSell')
            .then(response => {
                setCards(response.data.Result);
                const brands = [...new Set(response.data.Result.map(item => item.carSell.nameBrand))];
                brands.unshift('Seleccione');
                const years = [...new Set(response.data.Result.map(item => item.carSell.year))];
                years.unshift('Seleccione');
                const bodyshapes = [...new Set(response.data.Result.map(item => item.carSell.bodyShape))];
                bodyshapes.unshift('Seleccione');
                const transmissions = [...new Set(response.data.Result.map(item => item.carSell.transmission))];
                transmissions.unshift('Seleccione');

                const result = [
                    { label: 'Marca:', items: brands },
                    { label: 'Año:', items: years },
                    { label: 'Body Shape:', items: bodyshapes },
                    { label: 'Transmisión:', items: transmissions },
                ];

                setDropdowns(result);

            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        handleResults();
    }, []);

    const [selectedItems, setSelectedItems] = useState(Array(4).fill('Seleccione'));
    const [search, setSearch] = useState('');

    return (
        <div>
            <Navbar />
            <div className="col-12 flex justify-content-center" style={{ paddingTop: '80px', paddingBottom: '3%' }}>
                <h1>Carros en venta</h1>
            </div>
            <SearchFilters handleResults={handleResults} dropdowns={dropdowns} setSelectedItems={setSelectedItems} search={search} setSearch={setSearch} />

            <CardsCar cards={cards} filters={selectedItems} search={search} refreshParent={handleResults} />


        </div>
    );
}

export default CarSellScreen
