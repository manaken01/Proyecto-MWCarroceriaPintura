import React from 'react';
import Navbar from '../objects/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFiltersMyCars from '../objects/MyCar/SearchFiltersMyCars';
import CardMyCarsStart from '../objects/MyCar/CardMyCarsStart';

function MyCars() {
  return (
    <div>
      <Navbar/>
      <div className="col-12 d-flex justify-content-center" style={{ paddingTop:'80px', paddingBottom: '3%'}}>
          <h1>Mis carros</h1>
      </div>
      <SearchFiltersMyCars/>
      <CardMyCarsStart/>
    </div>
  );
}

export default MyCars;
