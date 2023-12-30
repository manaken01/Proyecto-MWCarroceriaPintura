import { useState } from 'react'
import InformationFirst from './components/InformationFirst';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from './components/Divider';
import InformationSecond from './components/InformationSecond';
import Contact from './components/Contact';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <Calendar/>
    </div>
  );
}

export default App
