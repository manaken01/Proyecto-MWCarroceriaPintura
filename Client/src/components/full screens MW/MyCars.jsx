import React from 'react';
import Navbar from '../objects/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFiltersMyCars from '../objects/MyCar/SearchFiltersMyCars';
import CardMyCarsStart from '../objects/MyCar/CardMyCarsStart';
import { useState , useEffect } from 'react'
import axios from 'axios';
import UserProfile from '../resources/UserProfile';
import { useParams } from "react-router-dom";

/**
 * Display of my cars user
 * @param {*} 
 * @returns component
 */
function MyCars() {

  const [carsUsers, setCarsUsers] = useState([]);
  var [responseData, setResponse] = useState([]);
  const [search, setSearch] = useState('');
  const dropdowns = [
        { label: 'Marca:', items: ['Seleccione','TOYOTA', 'HYUNDAI', 'NISSAN', 'HONDA', 'KIA', 'MITSUBISHI', 'CHEVROLET', 'MAZDA', 'SUZUKI'] },
        { label: 'Año:', items: ['Seleccione','1990', '1995', '2000', '2005', '2010', '2015', '2020', '2024'] },
  ];

  const [selectedItems, setSelectedItems] = useState(Array(2).fill('Seleccione'));

  const getCarUser = async () => {
        try {
            const response = await axios.get('http://localhost:8080/carUser', {
                    params: {
                        idUser: UserProfile.getId(),
                    }
            });
            setResponse(response.data.Result);
            return response.data.Result;
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResults = async () => {
        try {
            const carsItems = await getCarUser();
            //console.log(dropdownItems); // Verify that dropdownItems contains the expected data
            setCarsUsers(carsItems);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
      handleResults();
      
    }, []);


  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
          <h1>Mis carros</h1>
      </div>
      <SearchFiltersMyCars dropdowns={dropdowns} setSelectedItems={setSelectedItems} search = {search} setSearch ={setSearch}/>
      <CardMyCarsStart carsUsers={carsUsers} filters={selectedItems} search = {search}/>
    </div>
  );
}

export default MyCars;
