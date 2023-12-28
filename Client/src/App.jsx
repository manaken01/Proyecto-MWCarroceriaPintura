import { useState } from 'react'

import Cards from './components/Cards';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <div>
      <Navbar/>
      <SearchFilters />
      <Cards/>
    </div>
  );
}

export default App
