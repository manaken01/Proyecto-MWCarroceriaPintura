import { useState } from 'react'
import Navbar from '../objects/Navbar';
import Brands from '../objects/Brands';
import CardsStart from '../objects/CardsStart';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

function StartScreen() {
  return (
    <div>
      <Navbar/>
      <Brands/>
      <CardsStart/>
      
    </div>
  );
}

export default StartScreen
