import { useState } from 'react'
import Navbar from '../objects/Navbar';
import Brands from '../objects/Brand/Brands';
import CardsStart from '../objects/Parts/CardsStart';
import Reviews from '../objects/Review/ReviewsStart';
import Divider from '../decoration/Divider'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from '../resources/UserProfile';

function StartScreen() {
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
                    <h1>Buscar repuestos por las mejores marcas</h1>
                </div>
      <Brands/>
      <Divider />
      <div className="col-12 d-flex justify-content-center" style={{ padding: '3%'}}>
                    <h1>Opiniones destacadas</h1>
                </div>
      <Reviews/>

      <Divider />
      <div className="col-12 d-flex justify-content-center" style={{ padding: '3%'}}>
                    <h1>Repuestos destacados</h1>
                </div>
      <CardsStart/>
      
    </div>
  );
}

export default StartScreen
