import { useState } from 'react'
import Navbar from './components/Navbar';
import Brands from './components/Brands';
import Cards from './components/Cards';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import InformationSecond from './components/InformationSecond';
import Contact from './components/Contact';
import Calendar from './components/Calendar';

import SearchFilters from './components/SearchFilters';

function App() {
  return (
    <div>
      <Navbar/>
      <Calendar/>
    </div>
  );
}

export default App
