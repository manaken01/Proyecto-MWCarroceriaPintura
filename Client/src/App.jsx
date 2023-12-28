import { useState } from 'react'
import InformationFirst from './components/InformationFirst';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from './components/Divider';
import InformationSecond from './components/InformationSecond';
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
