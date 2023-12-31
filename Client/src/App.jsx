import { useState } from 'react'

import Navbar from './components/Navbar';
import Brands from './components/Brands';
import Cards from './components/Cards';


import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <div>
      <Navbar/>
      <Brands/>
      <Cards/>
      
    </div>
  );
}

export default App
